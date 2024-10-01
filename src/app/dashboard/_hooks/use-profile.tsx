import { UpdateProfileRequest } from '@/lib/interfaces/updateProfile.interface';
import { Put } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
// import CountryList from 'country-list-with-dial-code-and-flag';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const profileFormSchema = z
  .object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    phoneNumber: z.string(),
    countryCode: z.string(),
    dateOfBirth: z.string(),
  })
  .superRefine(({ dateOfBirth }, ctx) => {
    console.log(dateOfBirth);
    // if (!dateOfBirth) {
    //   ctx.addIssue({
    //     code: 'custom',
    //     message: 'The passwords did not match',
    //     path: ['confirmPassword'],
    //   });
    // }
  });

export const useProfile = ({
  firstName,
  lastName,
  email,
  phoneNumber,
}: {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}) => {
  // let fun = useMemo(() => {
  //   const list = CountryList.getAll();
  //   const set = new Set();
  //   list.forEach((v) => set.add(v.dialCode));
  //   return Array.from(list);
  // }, [CountryList]);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      firstName,
      lastName,
      email,
      phoneNumber,
      countryCode: '',
      dateOfBirth: format(
        new Date(new Date().getTime() - 18 * 365 * 24 * 60 * 60 * 1000),
        'yyyy-MM-dd'
      ),
    },
  });

  function onSubmit(values: z.infer<typeof profileFormSchema>) {
    console.log(values);
    const obj: UpdateProfileRequest = {
      first_name: values.firstName,
      last_name: values.lastName,
      contact: values.phoneNumber,
      email: values.email,
      birthday: values.dateOfBirth,
      country_code: '+91',
      country_iso_code: 'IN',
    };
    Put<UpdateProfileRequest>('/profile/update-details', obj, 'patch')
      .then((data) => {
        console.log('update details');
        toast({
          title: data?.meta?.message ?? 'Updated details successfully',
          variant: 'successive',
        });
      })
      .catch((err) => {
        toast({
          variant: 'destructive',
          title: 'Uh oh! something went wrong',
          description: err.message,
        });
      });
  }

  return { form, onSubmit };
};

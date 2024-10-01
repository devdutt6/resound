import { useToast } from '@/hooks/use-toast';
import { LoginResponse } from '@/lib/interfaces/login.interface';
import { Put } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { WebsiteContext } from '../context/context';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const useLogin = () => {
  const router = useRouter();
  const websiteOptions = useContext(WebsiteContext);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: 'kmjadeja@codezma.com',
      password: '12345678',
    },
  });

  function onSubmit(values: z.infer<typeof loginSchema>) {
    console.log(values);
    Put<LoginResponse>('/login', values)
      .then((data) => {
        localStorage.setItem('stripeId', data?.data?.stripe_id);
        localStorage.setItem(
          'subscription_expiry_date',
          data?.data?.subscription_expiry_date
        );
        localStorage.setItem('flags', JSON.stringify(data?.data?.flags));
        router.push('/');
        toast({
          title: data?.meta?.message ?? 'Logged in successfully',
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

  return {
    form,
    logo: websiteOptions?.appStatus.licensee.logo.licensee || '',
    onSubmit,
  };
};

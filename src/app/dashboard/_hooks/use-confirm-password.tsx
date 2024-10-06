import { useToast } from '@/hooks/use-toast';
import { Put } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const confirmPasswordSchema = z
  .object({
    currentPassword: z.string(),
    password: z.string(),
    confirmPassword: z.string(),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'The passwords did not match',
        path: ['confirmPassword'],
      });
    }
  });

export const useConfirmPassword = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof confirmPasswordSchema>>({
    resolver: zodResolver(confirmPasswordSchema),
    defaultValues: {
      currentPassword: '',
      password: '',
      confirmPassword: '',
    },
  });

  function onSubmit(values: z.infer<typeof confirmPasswordSchema>) {
    console.log(values);
    Put<{ meta: { message: string } }>(
      '/profile/change-password',
      {
        current_password: values.currentPassword,
        password: values.password,
      },
      'PATCH'
    )
      .then((data) => {
        console.log('change password');
        toast({
          title: data?.meta?.message ?? 'Password changed successfully',
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

  return { onSubmit, form };
};

import { useToast } from '@/hooks/use-toast';
import {
  RegisterRequest,
  RegisterResponse,
} from '@/lib/interfaces/register.interface';
import { Call, Put } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { AppStatus } from '../context/context';

const registerSchema = z
  .object({
    email: z.string().email().min(1, 'Email is a required field'),
    password: z.string().min(1, 'Password is a required field'),
    confirmPassword: z.string().min(1, 'Please confirm the password'),
    fullName: z.string().min(1, 'Name is a required field'),
    phoneNumber: z.string().min(1, 'Phone number is a required field'),
    dateOfBirth: z.string().min(1, 'Please specify your birth date'),
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

export const useRegister = () => {
  const { toast } = useToast();
  const [logo, setLogo] = useState('');
  const [step, setStep] = useState(1);
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      fullName: '',
      phoneNumber: '',
      dateOfBirth: format(
        new Date(new Date().getTime() - 18 * 365 * 24 * 3600000),
        'yyyy-MM-dd'
      ),
    },
  });

  useEffect(() => {
    Call<AppStatus>('/app-status')
      .then((data) => {
        setLogo(data?.licensee.logo.licensee);
      })
      .catch((err) => {
        // TODO error
      });
  }, []);

  useEffect(() => {
    setStep(1);
  }, [
    form.formState.errors.dateOfBirth,
    form.formState.errors.fullName,
    form.formState.errors.phoneNumber,
  ]);

  function onSubmit(values: z.infer<typeof registerSchema>) {
    console.log(values);
    const obj: RegisterRequest = {
      first_name: values.fullName.split(' ')?.at(0) ?? values.fullName,
      last_name:
        values.fullName.split(' ')?.at(1) ??
        values.fullName.split(' ')?.at(0) ??
        values.fullName,
      contact: values.phoneNumber,
      email: values.email,
      birthday: values.dateOfBirth,
      password: values.password,
      country_code: '+91',
      country_iso_code: 'IN',
    };
    Put<RegisterResponse>('/register', obj)
      .then((data) => {
        console.log('register');
        toast({ title: 'Registered Successfully', variant: 'successive' });
        // TODO success
      })
      .catch((err) => {
        // TODO error
        toast({
          variant: 'destructive',
          title: 'Uh oh! something went wrong',
          description: err.message,
        });
      });
  }
  async function nextStep() {
    let result = await form.trigger(['fullName', 'dateOfBirth', 'phoneNumber']);
    if (result) setStep(2);
  }

  return { form, onSubmit, nextStep, step, logo };
};

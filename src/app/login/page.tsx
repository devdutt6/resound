'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useLogin } from './use-login';

export default function Page() {
  const { form, logo, onSubmit } = useLogin();

  return (
    <div className='flex justify-center items-center h-screen bg-zinc-300'>
      <section className='md:w-[480px]'>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='gap-2 bg-zinc-100 p-6 rounded-lg shadow-md'
          >
            <img
              src={logo}
              className='block w-[150px] object-center cursor-pointer mx-auto mb-2'
            />
            <p className='text-center text-3xl font-semibold mb-2'>Login</p>
            <p className='text-center text-zinc-400 tracking-tight mb-6'>
              Enter your details to sign in your account
            </p>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem className='mb-4'>
                  <FormLabel className='text-gray-500'>Email</FormLabel>
                  <FormControl>
                    <Input className='bg-white' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-gray-500'>Password</FormLabel>
                  <FormControl>
                    <Input className='bg-white' type='password' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <br />
            <Button
              type='button'
              className='py-6 w-full text-[16px] bg-transparent text-black hover:bg-transparent hover:shadow-md mb-2'
            >
              Forgot Password
            </Button>
            <Button
              type='submit'
              className='py-6 w-full font-semibold text-lg mb-4 bg-[var(--primary-custom)] hover:shadow-md'
            >
              Sign in
            </Button>
            <p className='text-center text-md font-semibold tracking-tight'>
              Don&apos;t have an account?
            </p>
            <p className='text-center text-md -translate-y-1 font-semibold tracking-tight'>
              Click here to{' '}
              <a
                className='underline text-zinc-600 underline-offset-4'
                href='/register'
              >
                Sign up
              </a>
            </p>
          </form>
        </Form>
      </section>
    </div>
  );
}

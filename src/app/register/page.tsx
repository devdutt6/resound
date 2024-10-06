'use client';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useRegister } from './use-register';

export default function Page() {
  const { form, logo, onSubmit, step, nextStep } = useRegister();

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
            <p className='text-center text-3xl font-semibold mb-2'>Register</p>
            <p className='text-center text-zinc-400 tracking-tight mb-6'>
              Enter your details to create your account
            </p>
            {step === 1 && (
              <>
                <div className='flex justify-between gap-2'>
                  <FormField
                    control={form.control}
                    name='firstName'
                    render={({ field }) => (
                      <FormItem className='mb-4 flex-1'>
                        <FormLabel className='text-gray-500'>
                          First Name
                        </FormLabel>
                        <FormControl>
                          <Input className='bg-white' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='lastName'
                    render={({ field }) => (
                      <FormItem className='mb-4 flex-1'>
                        <FormLabel className='text-gray-500'>
                          Last Name
                        </FormLabel>
                        <FormControl>
                          <Input className='bg-white' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name='phoneNumber'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-gray-500'>
                        Contact Number
                      </FormLabel>
                      <FormControl>
                        <Input className='bg-white' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='dateOfBirth'
                  render={({ field }) => {
                    const last18 = new Date(
                      new Date().getTime() - 18 * 365 * 24 * 3600000
                    );
                    return (
                      <FormItem className='flex flex-col mt-4'>
                        <FormLabel className='text-zinc-400'>
                          Date of birth
                        </FormLabel>
                        <FormControl>
                          <Input
                            type='date'
                            // value={format(field.value, 'yyyy-MM-dd')}
                            value={field.value}
                            onChange={field.onChange}
                            className='w-full bg-white'
                            min={'1970-01-02'}
                            max={`${last18.getFullYear()}-${
                              `${last18.getMonth() + 1}`.length === 1
                                ? '0' + (last18.getMonth() + 1)
                                : last18.getMonth() + 1
                            }-${last18.getDate()}`}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </>
            )}
            {step === 2 && (
              <>
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
                    <FormItem className='mb-4'>
                      <FormLabel className='text-gray-500'>Password</FormLabel>
                      <FormControl>
                        <Input
                          className='bg-white'
                          type='password'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='confirmPassword'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-gray-500'>
                        Confirm Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          className='bg-white'
                          type='password'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}
            <br />
            {/* <Button
              type='submit'
              className='py-6 w-full text-[16px] bg-transparent text-black hover:bg-transparent'
            >
              Forgot Password
            </Button> */}
            {step === 2 && (
              <p className='text-sm text-gray-400 mb-2'>
                By clicking on Sign up, you accept our{' '}
                <span className='underline underline-offset-4'>
                  Terms & Conditions
                </span>{' '}
                and{' '}
                <span className='underline underline-offset-4'>
                  Privacy Policy
                </span>
              </p>
            )}
            {step === 1 ? (
              <button
                type='button'
                className='py-2 w-full font-semibold rounded-lg text-[var(--background)] text-lg mb-4 hover:bg-[var(--primary-custom)] bg-[var(--secondary-custom)] hover:shadow-md'
                onClick={nextStep}
              >
                Next
              </button>
            ) : (
              <button
                className='py-2 w-full font-semibold rounded-lg text-[var(--background)] text-lg mb-4 hover:bg-[var(--primary-custom)] bg-[var(--secondary-custom)] hover:shadow-md'
                type='submit'
              >
                Sign up
              </button>
            )}
            <p className='text-center text-md font-semibold tracking-tight'>
              Already have an account?
            </p>
            <p className='text-center text-md -translate-y-1 font-semibold tracking-tight'>
              Click here to{' '}
              <a
                href='/login'
                className='underline text-zinc-600 underline-offset-4'
              >
                Sign in
              </a>
            </p>
          </form>
        </Form>
      </section>
    </div>
  );
}

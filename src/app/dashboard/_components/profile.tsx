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
import { useProfile } from '../_hooks/use-profile';

export const Profile = (props: {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}) => {
  const { form, onSubmit } = useProfile(props);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex justify-between gap-4 border-b-2 border-zinc-400 pb-4'
      >
        <div className='flex-1'>
          <FormField
            control={form.control}
            name='firstName'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-zinc-400'>First Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder='John'
                    className='py-3'
                    type='text'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-zinc-400'>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder='example@email.com'
                    className='py-3'
                    type='email'
                    {...field}
                  />
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
                <FormItem className='flex flex-col mt-2 mb-4'>
                  <FormLabel className='text-zinc-400'>Date of birth</FormLabel>
                  <FormControl>
                    <Input
                      type='date'
                      value={field.value}
                      onChange={field.onChange}
                      className='w-full'
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
          <Button
            type='submit'
            className='w-full py-6 font-semibold mb-4 text-lg bg-[var(--primary-custom)] hover:bg-[var(--secondary-custom)]'
          >
            Save
          </Button>
        </div>
        <div className='flex-1'>
          <FormField
            control={form.control}
            name='lastName'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-zinc-400'>Last Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Doe'
                    className='py-3'
                    type='text'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='phoneNumber'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-zinc-400'>Phone Number</FormLabel>
                <FormControl>
                  <Input
                    placeholder=''
                    className='py-3'
                    type='text'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
};

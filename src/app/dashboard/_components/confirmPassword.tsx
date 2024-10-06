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
import { useConfirmPassword } from '../_hooks/use-confirm-password';

export const ConfirmPassword = () => {
  const { form, onSubmit } = useConfirmPassword();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='min-w-96'>
        <FormField
          control={form.control}
          name='currentPassword'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-zinc-400'>Current Password</FormLabel>
              <FormControl>
                <Input
                  placeholder=''
                  className='text-xl py-3'
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
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-zinc-400'>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder=''
                  className='text-xl py-3'
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
              <FormLabel className='text-zinc-400'>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  placeholder=''
                  className='text-xl py-3'
                  type='password'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <button
          className='py-2 w-full font-semibold rounded-lg text-[var(--background)] text-lg mb-4 hover:bg-[var(--primary-custom)] bg-[var(--secondary-custom)] hover:shadow-md mt-4'
          type='submit'
        >
          Save
        </button>
        <Button
          type='reset'
          className='w-full text-lg py-4 font-semibold bg-transparent border-black text-black border-2 hover:bg-transparent'
        >
          Cancel
        </Button>
      </form>
    </Form>
  );
};

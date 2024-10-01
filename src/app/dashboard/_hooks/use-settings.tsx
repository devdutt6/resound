import { useToast } from '@/hooks/use-toast';
import { LogoutResponse } from '@/lib/interfaces/logout.interfaces';
import { Call } from '@/lib/utils';
import { useRouter } from 'next/navigation';

export const useSettings = () => {
  const { toast } = useToast();
  const router = useRouter();

  const logMeOut = () => {
    Call<LogoutResponse>('/logout', true)
      .then((data) => {
        localStorage.clear();
        router.push('/login');
        toast({
          title: data?.meta?.message || 'Logged out',
          variant: 'successive',
        });
      })
      .catch((err) => {
        router.push('/login');
        toast({
          variant: 'destructive',
          title: 'Uh oh! something went wrong',
          description: err.message,
        });
      });
  };

  return { logMeOut };
};

import { useToast } from '@/hooks/use-toast';
import { Put } from '@/lib/utils';
import {
  CardNumberElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { StripeCardNumberElement } from '@stripe/stripe-js';

export const useStripeCardCompose = () => {
  const { toast } = useToast();
  const stripe = useStripe();
  const elements = useElements();

  const createPaymentMethod = async () => {
    const payload = await stripe?.createPaymentMethod({
      type: 'card',
      card: elements?.getElement(CardNumberElement) as StripeCardNumberElement,
    });

    const paymentMethodId = payload?.paymentMethod?.id;

    Put<any>('/add-new-card', { payment_method_id: paymentMethodId }, 'post')
      .then((data) => {
        console.log('add card');
        toast({
          title: data?.meta?.message || 'Card added successfully',
          variant: 'successive',
        });
      })
      .catch((err) => {
        toast({
          title: 'Uh oh! something went wrong',
          description: err.message || 'card failed to update',
          variant: 'destructive',
        });
      });
  };
  return { createPaymentMethod };
};

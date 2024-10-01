import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
} from '@stripe/react-stripe-js';
import { useStripeCardCompose } from '../_hooks/use-stripe-card-compose';

export const StripeCardCompose = () => {
  const { createPaymentMethod } = useStripeCardCompose();

  return (
    <div className='flex flex-col gap-2'>
      <CardNumberElement id='cardNumber' />
      <div className='flex gap-2'>
        <CardExpiryElement />
        <CardCvcElement />
      </div>
      <button
        onClick={createPaymentMethod}
        className='py-2 text-lg font-semibold w-full text-center bg-[var(--primary-custom)] hover:bg-[var(--secondary-custom)] text-white rounded-lg'
      >
        Add Card
      </button>
    </div>
  );
};

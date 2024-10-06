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
      <p className='text-sm mt-6'>Card number</p>
      <CardNumberElement
        id='cardNumber'
        className='pb-2 border-b-2 border-foreground'
        options={{ placeholder: '0000 0000 0000 0000' }}
      />
      <div className='flex gap-4 mb-6'>
        <div className='text-sm flex-1'>
          <p>Expiry</p>
          <CardExpiryElement
            className='py-2 border-b-2 border-foreground'
            options={{ placeholder: '02 / 24' }}
          />
        </div>
        <div className='text-sm flex-1'>
          <p>CVC</p>
          <CardCvcElement
            className='py-2 border-b-2 border-foreground'
            options={{ placeholder: '123' }}
          />
        </div>
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

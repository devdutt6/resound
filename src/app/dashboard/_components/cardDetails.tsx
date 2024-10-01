import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { StripeCardCompose } from './StripeCardCompose';

export function CardDetails() {
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PAYMENT_PUBLIC_KEY || ''
  );

  return (
    <section className='mt-4 flex flex-col'>
      <p className='text-2xl text-center'>
        No cards have been added yet. Please add your cards.
      </p>
      <Dialog>
        <DialogTrigger className='flex-1 py-3 rounded-lg bg-[var(--primary-custom)] hover:bg-[var(--secondary-custom)] text-white mt-4'>
          Add New Card
        </DialogTrigger>
        <DialogContent className='bg-white'>
          <DialogHeader>
            <DialogTitle className='text-2xl'>Card Details</DialogTitle>
            <DialogDescription>
              Rest assured your card details are stored on the stripe end
              securely.
            </DialogDescription>
            <Elements stripe={stripePromise}>
              <StripeCardCompose />
            </Elements>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
}

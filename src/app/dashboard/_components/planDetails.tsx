import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { format } from 'date-fns';
import { ExternalLink } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function PlanDetails() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <section className='mt-4 flex flex-col'>
      <p className='text-lg text-zinc-400 w-full mb-2'>
        {format(new Date(), 'PPP')}
      </p>
      <div className='p-4 flex justify-between items-center border-2 border-gray-300 rounded-lg'>
        <div className='flex flex-col gap-2'>
          <p className='font-semibold'>Super Saver</p>
          <p className='text-sm text-gray-400'>1 month</p>
        </div>
        <div className='flex gap-2 items-center'>
          <div className='px-2 py-1 bg-green-100 text-green-500 font-semibold text-xs rounded-md'>
            Active | 4 days ago
          </div>
          <p className='text-lg font-semibold'>A$4.5</p>
          <ExternalLink className='w-5 h-5' />
        </div>
      </div>
      <div className='flex gap-4 mt-4'>
        <button
          className='flex-1 py-3 rounded-lg bg-[var(--primary-custom)] hover:bg-[var(--secondary-custom)] text-white'
          onClick={() => router.push('/get-started')}
        >
          Update Existing Plan
        </button>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger className='flex-1 py-3 rounded-lg bg-[var(--primary-custom)] hover:bg-[var(--secondary-custom)] text-white'>
            Delete Existing Plan
          </DialogTrigger>
          <DialogContent className='bg-white'>
            <DialogHeader>
              <DialogTitle className='text-2xl'>Are you sure?</DialogTitle>
              <DialogDescription>
                This action is irreversible. Please confirm.
              </DialogDescription>
            </DialogHeader>
            <div className='flex justify-end items-center'>
              <button className='py-2 px-3 rounded-lg hover:text-[var(--secondary-custom)]  text-[var(--primary-custom)] text-lg font-semibold'>
                Delete
              </button>
              <button
                className='py-2 px-3 rounded-lg bg-[var(--primary-custom)] hover:bg-[var(--secondary-custom)] text-white text-lg font-semibold'
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

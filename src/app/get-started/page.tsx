'use client';

import { Check } from 'lucide-react';
// import { useContext } from 'react';
// import { WebsiteContext } from '../context/context';

export default function GetStartedPage() {
  // const websiteOptions = useContext(WebsiteContext);

  return (
    <div className='h-screen flex justify-center items-center'>
      <section className='py-14 flex flex-col gap-4 justify-center' id='plan'>
        <h4 className='text-4xl font-semibold tracking-tight'>
          Available plans
        </h4>
        <div className='border-2 border-zinc-300 rounded-lg flex flex-col gap-4 p-5 w-80'>
          <p className='text-xl text-black font-semibold'>Super Save</p>
          <p className='text-4xl text-black'>
            <span className='text-zinc-300'>A$</span>4.5/
            <span className='text-2xl'>month</span>
          </p>
          <ul className='flex flex-col gap-4'>
            <li className='tracking-wider font-semibold'>It includes:</li>
            {[1, 2, 3, 4].map((v) => (
              <li className='flex items-center' key={v}>
                <Check className='w-5 h-5 mr-2 text-green-600' /> Description #
                {v}
              </li>
            ))}
          </ul>
          <button className='px-4 py-4 mt-5 rounded-lg text-white hover:bg-[var(--secondary-custom)] bg-[var(--primary-custom)] tracking-wide font-semibold'>
            Current Plan
          </button>
        </div>
      </section>
    </div>
  );
}

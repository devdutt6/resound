'use client';

import { Check } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useContext, useEffect } from 'react';
import { type Service, WebsiteContext } from './context/context';

export default async function Home() {
  const websiteOptions = useContext(WebsiteContext);
  const router = useRouter();

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty(
      '--primary-custom',
      websiteOptions?.appStatus?.licensee?.colours?.primary || '#C75D23'
    );
    root.style.setProperty(
      '--secondary-custom',
      websiteOptions?.appStatus?.licensee?.colours?.secondary || '#C75D23'
    );
    document.title = websiteOptions?.websiteDetails.meta_tags.title || 'MST';
  }, [websiteOptions]);

  return (
    <div className='flex flex-col'>
      <>
        <main className='h-screen flex flex-col items-center relative text-white p-4'>
          <img
            src={websiteOptions?.websiteDetails.banner_section.image}
            style={{ zIndex: 0 }}
            className='w-full h-full object-cover absolute top-0 left-0'
          />
          <nav
            style={{ zIndex: 1 }}
            className='py-4 flex items-center justify-between sm:justify-between lg:w-[1100px] px-4 mx-auto w-full'
          >
            <a href='#' className='block shrink-0'>
              <img
                src={websiteOptions?.appStatus.licensee.logo.licensee}
                className='block object-center min-w-[149px] max-w-[150px] cursor-pointer'
              />
            </a>
            <ul className='hidden sm:flex [&>li]:px-4 [&>li]:py-2 items-center justify-between font-semibold hover:[&>li]:text-[var(--primary-custom)] [&>li]:cursor-pointer'>
              <li className=''>
                <a href='#about'>About</a>
              </li>
              <li className=''>
                <a href='#services'>Services</a>
              </li>
              <li className=''>
                <a href='#plan'>Plan</a>
              </li>
              <li className=''>
                <a href='#contactUs'>Contact Us</a>
              </li>
            </ul>
            <a
              className='rounded-full uppercase text-center align-middle font-semibold text-lg hover:border-[var(--primary-custom)] hover:text-[var(--primary-custom)] border-[var(--background)] border-[2px] px-6 py-2'
              href='/dashboard'
            >
              Dashboard
            </a>
          </nav>
          <div
            className='flex flex-col flex-1 justify-center items-center gap-4'
            style={{ zIndex: 10 }}
          >
            <h2 className='text-5xl'>
              {websiteOptions?.websiteDetails.banner_section.title}
            </h2>
            <p className='text-lg'>
              {websiteOptions?.websiteDetails.banner_section.description}
            </p>
            <a
              href={websiteOptions?.websiteDetails.banner_section.link}
              className='px-5 py-4 rounded-lg bg-white text-black uppercase hover:text-white hover:bg-[var(--primary-custom)]'
            >
              {websiteOptions?.websiteDetails.banner_section.button}
            </a>
          </div>
        </main>
        <section
          className='flex flex-col justify-center items-center py-28 gap-4'
          id='about'
        >
          <h3 className='text-gray-600 uppercase font-semibold'>About us</h3>
          <h4 className='text-4xl font-semibold tracking-tight'>
            {websiteOptions?.websiteDetails.about_us_section.title}
          </h4>
          <p className='max-w-[620px] text-center text-lg'>
            {websiteOptions?.websiteDetails.about_us_section.description}
          </p>
        </section>
        <main className='h-screen flex flex-col gap-4 justify-center items-center relative text-white'>
          <img
            src={websiteOptions?.websiteDetails.about_us_section.image}
            style={{ zIndex: 10 }}
            className='w-full h-full object-cover absolute top-0 left-0'
          />
        </main>
        <section className='flex flex-col justify-center items-center pt-28 gap-4'>
          <h4 className='text-4xl font-semibold tracking-tight'>
            {websiteOptions?.websiteDetails.services.title}
          </h4>
          <p className='max-w-[620px] text-center text-lg'>
            {websiteOptions?.websiteDetails.services.description}
          </p>
        </section>
        <section
          className='py-28 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-8 max-w-[1100px] mx-auto'
          id='services'
        >
          {websiteOptions?.services.map((v) => (
            <Card key={v.id} service={v} />
          ))}
        </section>
        <section
          className='py-14 flex flex-col gap-4 items-center justify-center'
          id='plan'
        >
          <h4 className='text-4xl font-semibold tracking-tight'>
            {websiteOptions?.websiteDetails.subscription.title}
          </h4>
          <h3 className='text-gray-600 text-lg mb-14'>
            {websiteOptions?.websiteDetails.subscription.description}
          </h3>
          <div className='border-2 border-zinc-300 rounded-lg flex flex-col gap-4 p-5 w-80'>
            <p className='text-xl text-black font-semibold'>Super Save</p>
            <p className='text-4xl text-black'>
              <span className='text-zinc-300 mr-1'>$</span>4.5/
              <span className='text-xl'>month</span>
            </p>
            <ul className='flex flex-col gap-4'>
              <li className='tracking-wider font-semibold'>It includes:</li>
              {[1, 2, 3, 4].map((v) => (
                <li className='flex items-center' key={v}>
                  <Check className='w-5 h-5 mr-2 text-green-600' /> Description
                  #{v}
                </li>
              ))}
            </ul>
            <button
              onClick={() => router.push('/get-started')}
              className='px-4 py-4 mt-5 rounded-lg text-white hover:bg-[var(--secondary-custom)] bg-[var(--primary-custom)] tracking-wide font-semibold'
            >
              Current Plan
            </button>
          </div>
        </section>
        <section className='flex flex-col justify-center items-center'>
          <div className='min-w-full lg:min-w-[1100px] flex flex-col sm:flex-row justify-between sm:items-center gap-2 bg-orange-100 rounded-3xl py-16 sm:py-24 px-20 mb-14'>
            <p className='text-5xl font-semibold text-orange-300 tracking-tight'>
              <span className='text-orange-700'>
                {websiteOptions?.websiteDetails.footer.primary_text}
              </span>{' '}
              {websiteOptions?.websiteDetails.footer.secondary_text}
            </p>
            <a
              href={websiteOptions?.websiteDetails.footer.link}
              className='text-lg font-semibold px-4 py-3 text-[var(--primary-custom)] bg-white rounded-lg hover:text-white hover:bg-[var(--primary-custom)] max-w-40 sm:max-w-none'
            >
              {websiteOptions?.websiteDetails.footer.button}
            </a>
          </div>
        </section>
        <div className='flex justify-center pb-12'>
          <a href='#' className='block shrink-0'>
            <img
              src={websiteOptions?.appStatus.licensee.logo.licensee}
              className='block object-center min-w-[250px] max-w-[250px] cursor-pointer'
            />
          </a>
        </div>
        <footer className='flex justify-center items-center border-t-2 border-zinc-400 py-6 px-2'>
          <ul className='flex flex-col md:flex-row text-zinc-300 [&>li]:px-4 [&>li]:py-2 items-center justify-between font-semibold text-lg hover:[&>li]:text-[var(--primary-custom)] [&>li]:cursor-pointer'>
            <li className=''>
              <a href='#about'>About</a>
            </li>
            <li className=''>
              <a href='#services'>Services</a>
            </li>
            <li className=''>
              <a href='#plan'>Plan</a>
            </li>
            <li className=''>
              <a href='#contactUs'>Contact Us</a>
            </li>
          </ul>
          <div className='text-sm text-gray-500 flex-1 text-center'>
            {websiteOptions?.websiteDetails.other.copy_right}
          </div>
          <div className='font-bold text-lg flex-1 text-right'>
            {websiteOptions?.websiteDetails.other.powered_by}
          </div>
        </footer>
      </>
    </div>
  );
}

const Card = ({ service }: { service: Service }) => {
  return (
    <div className='col-span-1 flex flex-col gap-4 px-4 group'>
      <img
        className='block h-12 w-12 rounded-lg object-cover object-center'
        // bg-[var(--primary-custom)]
        src={service.image}
      />
      <p className='text-2xl font-bold group-hover:text-[var(--primary-custom)]'>
        {service.title}
      </p>
      <p className='text-lg text-zinc-500'>{service.description}</p>
    </div>
  );
};

import { CalendarDaysIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className='relative'>
      <div className="bg-[url('/assets/hero-background.png')] bg-cover bg-center absolute top-0 bottom-0 left-0 right-0 z-0" />
      <div className='bg-hero-overlay absolute top-0 right-0 bottom-0 left-0 z-10'></div>
      <div className='mx-auto align-center max-w-7xl min-h-screen px-4 sm:px-6 lg:px-8 md:text-center flex flex-col justify-center'>
        <h1 className='mx-auto max-w-4xl text-6xl font-medium tracking-tight text-slate-100 md:text-7xl text-balance z-10 text-center'>
          <span className='bg-gradient-to-r bg-gradient-to-r bg-gradient-to-r from-teal-400 to-yellow-200 bg-clip-text text-transparent leading-10'>
            RESHAPE YOUR ORGANISATION
          </span>
        </h1>
        <p className='mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-300 z-10 text-center font-bold tracking-wide'>
          J K Nair coaches, trains and motivates team to grow and scale.
        </p>
        <div className='mt-10 flex justify-center gap-x-6 z-10'>
          <Link
            href='/contact'
            className='flex gap-2 hover:gap-4 items-center animate-fade-in rounded-full border border-black bg-white px-6 py-3 text-sm text-black transition-all hover:border-gray-300 hover:bg-gray-50'
          >
            <CalendarDaysIcon className='w-[20px]' />
            Invite Mr. Nair
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

import { serviceList } from '@/constant/config';

const TopModules = () => {
  return (
    <section id='services' className='py-20 sm:py-32 bg-white'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-3xl tracking-tight text-slate-900 sm:text-4xl heading'>
            Top Requested Modules
          </h2>
          <p className='mt-4 text-lg tracking-tight text-slate-700 text-balance'>
          Our proven strategic training modules are personally curated to achieve specific goals for each client
          </p>
        </div>
        <ul
          role='list'
          className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3'
        >
          {serviceList.map((service) => (
            <Link
              key={service.anchor}
              className='relative rounded-2xl border border-gray-200 p-8 overflow-hidden hover:cursor-pointer group min-h-[260px] flex flex-col gap-2 items-center justify-center bottom-0 hover:bottom-1'
              title='read more'
              href={`/training#${service.anchor}`}
            >
              <div
                style={{ backgroundImage: `url('${service.image}')` }}
                className='absolute top-0 right-0 bottom-0 left-0 z-0 bg-cover bg-center'
              ></div>
              <div className='bg-overlay-medium absolute top-0 right-0 bottom-0 left-0 z-10'></div>

              <h4 className='relative font-semibold z-10 text-center text-balance text-white text-2xl underline decoration-dotted decoration-1 underline-offset-4'>
                {service.name}
              </h4>
            </Link>
          ))}
          <Link
              key="all"
              className='relative rounded-2xl border border-gray-200 p-8 overflow-hidden hover:cursor-pointer group min-h-[260px] flex flex-col gap-2 items-center justify-center bottom-0 hover:bottom-1'
              title='view all modules'
              href="/training"
            >
              {/* <div className='bg-overlay-medium absolute top-0 right-0 bottom-0 left-0 z-10'></div> */}

              <h4 className='relative font-semibold z-10 text-center text-balance text-black text-2xl underline decoration-dotted decoration-1 underline-offset-4 flex gap-2'>
                Check all training modules
                <ArrowRightIcon className='w-[20px] inline' />
              </h4>
            </Link>
        </ul>

      </div>
    </section>
  );
};

export default TopModules;

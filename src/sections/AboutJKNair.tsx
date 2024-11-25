import { ArrowRightIcon } from '@heroicons/react/24/outline';
import {
  GlobeAltIcon,
  LightBulbIcon,
  PresentationChartLineIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from '@heroicons/react/24/solid';
import Link from 'next/link';

const AboutJkNair = () => {
  return (
    <section id='story' className='py-20 sm:py-32 lg:pt-40 bg-white'>
      {/* <div className='w-full gap-8 p-8 mb-16 grid grid-cols-2 md:grid-cols-4'>
        <div className='grow border rounded-lg flex flex-col items-center p-8'><ShieldCheckIcon className='w-[32px]' /> 7 Awards</div>
        <div className='grow border rounded-lg flex flex-col items-center p-8'><LightBulbIcon className='w-[32px]' /> 26+ years of experience</div>
        <div className='grow border rounded-lg flex flex-col items-center p-8'><PresentationChartLineIcon className='w-[32px]' /> 250+ Clients</div>
        <div className='grow border rounded-lg flex flex-col items-center p-8'><UserGroupIcon className='w-[32px]' /> 2.5L+ Participants</div>
      </div> */}
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col-reverse gap-12 lg:flex-row'>
        <div>
          <img
            src='/assets/jknair/1-potrait.jpeg'
            alt='team posing for a photo'
            className='w-full h-auto rounded-lg max-w-[400px] mx-auto'
          />
        </div>
        <div className='max-w-2xl my-auto'>
          <h2 className='text-3xl tracking-tight text-slate-900 sm:text-4xl text-balance text-center sm:text-left'>
            About J K Nair
          </h2>
          <div className='text-lg tracking-tight text-slate-700 text-center sm:text-left'>
            Transforming talent, driving organizational success
          </div>
          <p className='mt-6 text-lg tracking-tight text-slate-700 text-balance'>
            J K Nair is top motivational speaker, educator, bestselling author,
            and actor. He is one of this country's most sought-after corporate
            training and development gurus. His renowned ability to conduct
            sessions with deep understanding & humour nas made nim the no.
            Business Coach in India for over 30+ years.
          </p>

          {/* <p className='mt-4 text-lg tracking-tight text-slate-700 text-balance'>
            We aim to bring honest service and trained car mechanics &
            technicians (with diagnostic equipment supporting technology) to
            create more visibility in the auto services industry.
          </p> */}
          <Link
            href='/about'
            className='mt-6 w-fit flex items-center gap-2 hover:gap-4 rounded-full border px-6 py-3 text-sm font-medium shadow-sm transition-all border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50'
          >
            Learn more
            <ArrowRightIcon className='w-[20px]' />
          </Link>

          <div className='w-full gap-4 mt-16 grid grid-cols-2'>
            <div className='grow border rounded-lg flex flex-col items-center p-8 gap-2'>
              <ShieldCheckIcon className='w-[32px]' /> 7 Awards
            </div>
            <div className='grow border rounded-lg flex flex-col items-center p-8 text-center gap-2'>
              <LightBulbIcon className='w-[32px]' /> 26+ years of experience
            </div>
            <div className='grow border rounded-lg flex flex-col items-center p-8 gap-2'>
              <PresentationChartLineIcon className='w-[32px]' /> 250+ Clients
            </div>
            <div className='grow border rounded-lg flex flex-col items-center p-8 text-center gap-2'>
              <UserGroupIcon className='w-[32px]' /> 2.5L+ Participants
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutJkNair;

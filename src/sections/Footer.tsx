import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
const navigation = {
  socials: [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/#',
    },
    { name: 'Twitter', href: 'https://x.com/#' },
    {
      name: 'Youtube',
      href: 'https://www.youtube.com/channel/#',
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/#',
    },
    {
      name: 'LinkedIn',
      href: 'https://in.linkedin.com/company/#',
    },
  ],
  company: [
    { name: 'Home', href: '/' },
    { name: 'About us', href: '/about' },
    { name: 'Training modules', href: '/training' },
    { name: 'Publications', href: '/publications' },
    { name: 'Contact us', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className='bg-white' aria-labelledby='footer-heading'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8 py-8 sm:py-12 lg:py-16 my-8 sm:my-12 lg:my-16 border-t border-slate-200'>
        <div className='lg:grid lg:grid-cols-2 lg:gap-36'>
          <div className='flex flex-col gap-1 items-start'>
            <h6 className='text-lg md:text-2xl font-bold'>
              Vital Training Pvt. Ltd
            </h6>
            <Link
              href='https://maps.app.goo.gl/91n292JqLDuW8Qyn7'
              className='mt-4 text-sm flex gap-1 items-center'
            >
              <MapPinIcon className='h-[16px] w-[16px] basis-[16px] block' />
              B-402, Akash Earrth Apartments, Near Shiv Someshwar Enclave,
              Althan-Bhimrad, Canal Road, Surat, Gujarat - 395007
            </Link>
            <Link
              href='tel:+919727999666'
              className='text-sm flex gap-1 items-center'
            >
              <PhoneIcon className='h-[16px] w-[16px] basis-[16px]' /> 9727999666
            </Link>
            <Link
              href='mailto:jkvital@gmail.com'
              className='text-sm flex gap-1 items-center'
            >
              <EnvelopeIcon className='h-[16px] w-[16px] basis-[16px]' /> jkvital@gmail.com
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-10 lg:mt-0'>
            <div>
              <h3 className='text-sm font-semibold leading-6 text-gray-900'>
                Company
              </h3>
              <ul role='list' className='mt-6 space-y-4'>
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className='text-sm leading-6 text-gray-600 hover:text-gray-900'
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className='text-sm font-semibold leading-6 text-gray-900'>
                Socials
              </h3>
              <ul role='list' className='mt-6 space-y-4'>
                {navigation.socials.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className='text-sm leading-6 text-gray-600 hover:text-gray-900'
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

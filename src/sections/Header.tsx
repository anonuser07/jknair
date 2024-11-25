import { Dialog, Popover } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { cn, throttle } from '@/lib/utils';

const items = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Training modules', href: '/training' },
  { name: 'Publications', href: '/publications' },
  { name: 'Contact', href: '/contact' },
];

const Header = ({
  transparentBgOnFirstFold = false,
}: {
  transparentBgOnFirstFold?: boolean;
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  useEffect(() => {
    const scrollHandler = throttle(() => {
      if (window.scrollY < 100) {
        setIsScrolledDown(false);
      } else {
        setIsScrolledDown(true);
      }
    }, 0);
    scrollHandler();
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-30 transition-all',
        (!transparentBgOnFirstFold || isScrolledDown) &&
          ' bg-white border-b border-gray-200 bg-white/75 backdrop-blur-lg',
        !isScrolledDown && 'border-none'
      )}
    >
      <nav className='mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8 '>
        <div className='flex lg:flex-1'>
          <Link href='/' className='-m-1.5 p-1.5 flex gap-2 items-center'>
            <img className='h-8 w-auto' src='https://upload.wikimedia.org/wikipedia/commons/a/aa/V-logo.svg' alt='' />
            <span
              className={cn(
                'font-bold text-lg',
                transparentBgOnFirstFold && !isScrolledDown && 'text-white'
              )}
            >
              J K Nair
            </span>
          </Link>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon
              className='h-6 w-6'
              aria-hidden='true'
              color={!transparentBgOnFirstFold || isScrolledDown ? '' : 'white'}
            />
          </button>
        </div>
        <Popover.Group className='hidden lg:flex lg:gap-x-12'>
          {items.map((item) => (
            <Link
              href={item.href}
              className={cn([
                'rounded-md px-3 py-2 text-sm font-medium transition-all ease-out',
                !transparentBgOnFirstFold || isScrolledDown
                  ? 'text-gray-600 hover:text-black'
                  : 'text-gray-200 hover:text-gray-400',
              ])}
              key={item.name}
            >
              {item.name}
            </Link>
          ))}
        </Popover.Group>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <Link
            href='/contact'
            className='flex flex-row animate-fade-in rounded-full border border-black bg-black px-4 py-1.5 text-sm text-white transition-all hover:bg-white hover:text-black'
          >
            Invite Mr. Nair
          </Link>
        </div>
      </nav>
      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-50' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <Link href='/' className='-m-1.5 p-1.5 flex gap-2 items-center'>
              <img className='h-8 w-auto' src='https://upload.wikimedia.org/wikipedia/commons/a/aa/V-logo.svg' alt='' />
              <span className='font-bold text-lg'>J K NAIR</span>
            </Link>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6'>
              <div className='space-y-2 pt-6 pb-3'>
                {items.map((item) => (
                  <Link
                    href={item.href}
                    className='-mx-3 block rounded-lg px-3 py-2 text-3xl font-semibold leading-12 text-gray-900 hover:bg-gray-50'
                    key={item.name}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className='py-6'>
                <Link
                  href='/contact'
                  className='animate-fade-in rounded-full border border-black px-6 py-2 text-2xl bg-white text-black'
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;

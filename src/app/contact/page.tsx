'use client';

import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';

import SectionDivider from '@/components/SectionDivider';

import Footer from '@/sections/Footer';
import Header from '@/sections/Header';

declare global {
  interface Window {
    Tally: any;
  }
}

export default function About() {
  useEffect(() => {
    if (window.Tally) window.Tally.loadEmbeds();
  }, []);
  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>

      <Header />

      <main className='bg-white pt-[70px]'>
        <section className='py-20 sm:py-16'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='mx-auto max-w-4xl'>
              <h2 className='text-3xl text-slate-900 sm:text-4xl heading'>
                Get in touch
              </h2>
              <p className='mt-1 text-lg tracking-tight text-slate-700 text-balance'>
                {/* We are available from 9am to 6pm, Monday to Saturday */}
              </p>

              <div className='mt-16 max-w-4xl'>
                <h3>Enquire now</h3>
                <div className='text-sm text-slate-500'>
                  or request callback
                </div>

                <div className='flex flex-col lg:flex-row gap-8 items-start justify-between'>
                  <div className='max-w-[500px] w-full grow'>
                    <iframe
                      data-tally-src='https://tally.so/embed/wgL0yd?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1'
                      loading='lazy'
                      width='100%'
                      height='609'
                      className='border-none'
                      title='Enquire now'
                    ></iframe>
                  </div>
                  <img
                    src='/assets/jknair/2-square.jpeg'
                    alt='team posing for a photo'
                    className='max-w-[350px] rounded-lg hidden lg:block'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className='relative'>
          <SectionDivider position='top' />
          <section className='py-24 sm:py-20 bg-alabaster'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
              <div className='mx-auto max-w-4xl'>
                <h3 className='mt-16 mb-8'>Reach us</h3>
                <div className='flex flex-col lg:flex-row gap-8'>
                  <div className='grow grid grid-cols-1 grid-rows-3 border rounded lg:text-center'>
                    <div className='p-4 h-full content-center border-b'>
                      <h3 className='flex gap-1 text-base lg:justify-center items-center'>
                        <PhoneIcon className='h-[16px] w-[16px]' />
                        Call or WhatsApp
                      </h3>
                      <p>
                        <Link href='tel:+919727999666'>9727999666</Link>
                      </p>
                    </div>

                    <div className='p-4 h-full content-center border-b'>
                      <h3 className='flex gap-1 text-base lg:justify-center items-center'>
                        <EnvelopeIcon className='h-[16px] w-[16px]' /> Email
                      </h3>
                      <p>
                        <Link href='mailto:jkvital@gmail.com'>
                          jkvital@gmail.com
                        </Link>
                      </p>
                    </div>

                    <div className='p-4 h-full content-center'>
                      <h3 className='flex gap-1 text-base lg:justify-center items-center'>
                        <MapPinIcon className='h-[16px] w-[16px]' />
                        Locate us
                      </h3>
                      <p>
                        <Link href='#'>
                          B-402, Akash Earrth Apartments, Near Shiv Someshwar
                          Enclave, Althan-Bhimrad, Canal Road, Surat, Gujarat -
                          395007
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <SectionDivider position='bottom' />
        </div>

        {/* <Socials /> */}
      </main>

      <Footer />
    </div>
  );
}

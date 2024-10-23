import Link from 'next/link';
import React from 'react';

function CTA() {
  return (
    <div>
      <div class='bg-green-50  overflow-hidden relative'>
        <div class='text-start w-full md:w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-36 z-20'>
          <h2 class='text-3xl font-bold text-black  sm:text-4xl'>
            <span class='block text-2xl '>Want to be a part of us ?</span>
            <span class='block text-green-600'>It&#x27;s today or never.</span>
          </h2>
          <p class='text-lg mt-4 text-gray-400'>
            Join us at Charity and help create positive change. Whether you
            donate, volunteer, or spread awareness, your efforts will empower
            those in need and foster hope in our communities.
          </p>
          <div class='lg:mt-0 lg:flex-shrink-0'>
            <div class='mt-12 inline-flex rounded-md shadow'>
              <Link
                href='/contact-us'
                class='py-2 px-6  bg-green-700 hover:bg-secondary focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <img
          src='./assets/anjana-logo.png'
          className='absolute top-20 right-10 w-72 h-72  hidden h-full max-w-1/2 lg:block'
        />
      </div>
    </div>
  );
}

export default CTA;

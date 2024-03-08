import Link from 'next/link';
import React from 'react';

function JoinUs() {
  return (
    <div className='container py-10 md:py-20'>
      <span className='text-2xl font-semibold uppercase  flex justify-center'>
        <p className='border-b-2 border-green-600 text-xl text-green-600'>
          Join Us
        </p>
      </span>
      <section class='text-gray-700 body-font'>
        <div class='container px-5 py-10 md:py-16 mx-auto'>
          <div class='flex flex-wrap -m-4 text-center justify-center'>
            <Link href='/donate' class='p-4 md:w-1/4 sm:w-1/2 w-full'>
              <div class='border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  class='text-green-500 w-12 h-12 mb-3 inline-block'
                  viewBox='0 0 16 16'
                >
                  <path d='M8 7.982C9.664 6.309 13.825 9.236 8 13 2.175 9.236 6.336 6.31 8 7.982' />
                  <path d='M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4zm0 1H7.5v3h-6zM8.5 4V1h3.75l2.25 3zM15 5v10H1V5z' />
                </svg>
                <h2 class='title-font font-medium  uppercase text-2xl  md:text-3xl text-gray-600'>
                  Donations
                </h2>
                <p class='leading-relaxed'>Join us as a Donor</p>
              </div>
            </Link>
            <Link href='/volunteer' class='p-4 md:w-1/4 sm:w-1/2 w-full'>
              <div class='border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  class='text-green-500 w-12 h-12 mb-3 inline-block'
                  viewBox='0 0 24 24'
                >
                  <path d='M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2'></path>
                  <circle cx='9' cy='7' r='4'></circle>
                  <path d='M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75'></path>
                </svg>
                <h2 class='title-font font-medium  uppercase text-2xl  md:text-3xl text-gray-600'>
                  Volunteer
                </h2>
                <p class='leading-relaxed text-sm'>Join us as a Volunteer</p>
              </div>
            </Link>
            <Link href='/sponsor' class='p-4 md:w-1/4 sm:w-1/2 w-full'>
              <div class='border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  class='text-green-500 w-12 h-12 mb-3 inline-block'
                  viewBox='0 0 16 16'
                >
                  <path d='M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013 75 75 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0m-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233q.27.015.537.036c2.568.189 5.093.744 7.463 1.993zm-9 6.215v-4.13a95 95 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A61 61 0 0 1 4 10.065m-.657.975 1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68 68 0 0 0-1.722-.082z' />
                </svg>

                <h2 class='title-font font-medium  uppercase text-2xl  md:text-3xl text-gray-600'>
                  Sponsor
                </h2>
                <p class='leading-relaxed text-sm'>Join us as a Sponsor</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default JoinUs;

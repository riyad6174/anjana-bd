import UserDonationList from '@/components/pageComponents/UserDonationList';
import { tableCustomStyles } from '@/utils/tableStyle';
import React, { useState } from 'react';

function Page() {
  return (
    <div>
      <div class='container  mx-auto  p-5'>
        <div className='grid grid-cols-4 gap-6 px-3 pb-10'>
          <div className='shadow-md rounded-lg text-gray-600 border-2 border-green-600 flex flex-col justify-center items-center py-4 '>
            <span className='text-sm  uppercase'> Donation Amount</span>
            <span className='text-3xl'> 30K</span>
          </div>
          <div className='shadow-md rounded-lg text-gray-600 border-2 border-green-600 flex flex-col justify-center items-center py-4 '>
            <span className='text-sm  uppercase'> Meal Sponsor Amount</span>
            <span className='text-3xl'> 30K</span>
          </div>
          <div className='shadow-md rounded-lg text-gray-600 border-2 border-green-600 flex flex-col justify-center items-center py-4 '>
            <span className='text-sm  uppercase'> Sponsorship Donation</span>
            <span className='text-3xl'> 30K</span>
          </div>
          <div className='shadow-md rounded-lg text-gray-600 border-2 border-green-600 flex flex-col justify-center items-center py-4 '>
            <span className='text-sm  uppercase'>Total Donation</span>
            <span className='text-3xl'> 30K</span>
          </div>
        </div>
        <div class='md:flex no-wrap md:-mx-2 '>
          {/* <!-- Left Side --> */}
          <div class='w-full md:w-3/12 md:mx-2'>
            {/* <!-- Profile Card --> */}
            <div class='bg-white p-3  '>
              <div class='image overflow-hidden'>
                <img
                  class='h-auto w-full mx-auto'
                  src='https://placehold.co/400x400@2x.png'
                  alt=''
                />
              </div>
              <h1 class='text-gray-900 font-bold text-xl leading-8 my-1'>
                Jane Doe
              </h1>
              <h3 class='text-gray-600 font-lg text-semibold leading-6'>
                Owner at Her Company Inc.
              </h3>
              <p class='text-sm text-gray-500 hover:text-gray-600 leading-6'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur
                non deserunt
              </p>
              <ul class='bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm'>
                <li class='flex items-center py-3'>
                  <span>Logout From here</span>
                  <span class='ml-auto'>
                    <button class='bg-red-500 py-1 px-2 rounded text-white text-sm'>
                      Logout{' '}
                    </button>
                  </span>
                </li>
                {/* <li class='flex items-center py-3'>
                  <span>Member since</span>
                  <span class='ml-auto'>Nov 07, 2016</span>
                </li> */}
              </ul>
            </div>
            {/* <!-- End of profile card --> */}
            <div class='my-4'></div>
            {/* <!-- Friends card --> */}
            <div class='bg-white p-3 hover:shadow'>
              <div class='flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8'>
                <span class='text-green-500'>
                  <svg
                    class='h-5 fill-current'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                    />
                  </svg>
                </span>
                {/* <span>Similar Profiles</span> */}
              </div>
            </div>
            {/* <!-- End of friends card --> */}
          </div>
          {/* <!-- Right Side --> */}
          <div class='w-full md:w-9/12 mx-2 h-64'>
            {/* <!-- Profile tab -->
                <!-- About Section --> */}
            <div class='bg-white p-3 shadow-sm rounded-sm py-4'>
              <div class='flex items-center justify-between space-x-2 font-semibold text-gray-900 leading-8'>
                <div className='flex items-center gap-x-2'>
                  <span clas='text-green-500'>
                    <svg
                      class='h-5'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                      />
                    </svg>
                  </span>
                  <span class='tracking-wide'>About</span>
                </div>

                <button className='tracking-wide text-sm uppercase bg-violet-400 text-white px-4 py-1'>
                  Update Profile
                </button>
              </div>
              <div class='text-gray-700 py-6'>
                <div class='grid md:grid-cols-2 text-sm'>
                  <div class='grid grid-cols-2'>
                    <div class='px-4 py-2 font-semibold'>First Name</div>
                    <div class='px-4 py-2'>Jane</div>
                  </div>
                  <div class='grid grid-cols-2'>
                    <div class='px-4 py-2 font-semibold'>Last Name</div>
                    <div class='px-4 py-2'>Doe</div>
                  </div>
                  <div class='grid grid-cols-2'>
                    <div class='px-4 py-2 font-semibold'>Gender</div>
                    <div class='px-4 py-2'>Female</div>
                  </div>
                  <div class='grid grid-cols-2'>
                    <div class='px-4 py-2 font-semibold'>Contact No.</div>
                    <div class='px-4 py-2'>+11 998001001</div>
                  </div>
                  <div class='grid grid-cols-2'>
                    <div class='px-4 py-2 font-semibold'>Current Address</div>
                    <div class='px-4 py-2'>Beech Creek, PA, Pennsylvania</div>
                  </div>
                  <div class='grid grid-cols-2'>
                    <div class='px-4 py-2 font-semibold'>Permanant Address</div>
                    <div class='px-4 py-2'>Arlington Heights, IL, Illinois</div>
                  </div>
                  <div class='grid grid-cols-2'>
                    <div class='px-4 py-2 font-semibold'>Email.</div>
                    <div class='px-4 py-2'>
                      <a class='text-blue-800' href='mailto:jane@example.com'>
                        jane@example.com
                      </a>
                    </div>
                  </div>
                  <div class='grid grid-cols-2'>
                    <div class='px-4 py-2 font-semibold'>Birthday</div>
                    <div class='px-4 py-2'>Feb 06, 1998</div>
                  </div>
                </div>
              </div>
              <div class='flex items-center justify-between space-x-2 font-semibold text-gray-900 leading-8'>
                <div className='flex items-center gap-x-2'>
                  <span clas='text-green-500'>
                    <svg
                      class='h-5'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                      />
                    </svg>
                  </span>
                  <span class='tracking-wide'>Volunteer Details</span>
                </div>
              </div>
              <div class='text-gray-700 py-6'>
                <div class='grid md:grid-cols-2 text-sm'>
                  <div class='grid grid-cols-2'>
                    <div class='px-4 py-2 font-semibold'>Status</div>
                    <div class='px-4 py-2 text-yellow-600'>Not a Volunteer</div>
                  </div>
                </div>
              </div>
              {/* <button class='block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4'>
                Show Full Information
              </button> */}
            </div>
            {/* <!-- End of about section --> */}

            <div class='my-4'></div>

            {/* <!-- Experience and education --> */}
            <div class='bg-white p-3 shadow-sm rounded-sm'>
              {/* <!--  donation grid --> */}
              <UserDonationList />
            </div>
            {/* <!-- End of profile tab --> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;

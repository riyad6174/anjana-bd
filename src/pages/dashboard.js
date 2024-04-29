import UserDonationList from '@/components/pageComponents/UserDonationList';
import { logout } from '@/utils/redux/authSlice';
import { tableCustomStyles } from '@/utils/tableStyle';
import React, { useState } from 'react';
import { BsPencil } from 'react-icons/bs';

import { useDispatch } from 'react-redux';

function Page() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.clear();
  };
  return (
    <div className='mt-24'>
      <div class='container  mx-auto  p-5'>
        <div className='grid grid-cols-4 gap-6 px-3 pb-10'>
          <div className='shadow-md rounded-lg text-gray-600 border-2 border-indigo-800 bg-indigo-100 flex flex-col justify-center items-center py-4 '>
            <span className='text-sm  uppercase'> Donation Amount</span>
            <span className='text-3xl'> 0 </span>
          </div>
          <div className='shadow-md rounded-lg text-gray-600 border-2 border-indigo-800 bg-indigo-100 flex flex-col justify-center items-center py-4 '>
            <span className='text-sm  uppercase'> Meal Sponsor Amount</span>
            <span className='text-3xl'> 0 </span>
          </div>
          <div className='shadow-md rounded-lg text-gray-600 border-2 border-indigo-800 bg-indigo-100 flex flex-col justify-center items-center py-4 '>
            <span className='text-sm  uppercase'> Sponsorship Donation</span>
            <span className='text-3xl'> 0 </span>
          </div>
          <div className='shadow-md rounded-lg text-gray-600 border-2 border-indigo-800 bg-indigo-100 flex flex-col justify-center items-center py-4 '>
            <span className='text-sm  uppercase'>Total Donation</span>
            <span className='text-3xl'> 0 </span>
          </div>
        </div>
        <div class='md:flex no-wrap md:-mx-2 h-screen'>
          {/* <!-- Left Side --> */}
          <div class='w-full md:w-3/12 md:mx-2'>
            <div class='bg-white p-3 border-r border-indigo-200  '>
              <h1 class='text-gray-900 font-bold text-xl leading-8 my-1'>
                Jane Doe
              </h1>
              <h3 class='text-gray-600 font-lg text-semibold leading-6'>
                email@email.com
              </h3>
              <p class='text-sm text-gray-500 hover:text-gray-600 leading-6'>
                12345645
              </p>
              <ul class='bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm'>
                <li class='flex items-center py-3'>
                  <span>Logout From here</span>
                  <span class='ml-auto'>
                    <button
                      onClick={handleLogout}
                      class='bg-red-500 py-1 px-2 rounded text-white text-sm'
                    >
                      Logout{' '}
                    </button>
                  </span>
                </li>
              </ul>
            </div>
            <div class='my-4'></div>
            {/* <!-- Friends card --> */}
          </div>
          {/* <!-- Right Side --> */}
          <div class='w-full md:w-9/12 mx-2 h-64'>
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
              {/* <button class='block w-full text-indigo-900 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4'>
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

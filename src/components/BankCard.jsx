import React from 'react';

function BankCard() {
  return (
    <div>
      <div class='bg-gray-50 text-gray-600'>
        <div class='mx-auto container flex justify-center py-16 px-4'>
          <div class='flex flex-col space-y-8 w-full px-16 max-w-xl'>
            <div class='bg-gradient-to-tl from-green-600 to-gray-800 text-white h-56 w-96 p-6 rounded-xl shadow-md'>
              <div class='h-full flex flex-col justify-between'>
                <div class='flex items-start justify-between space-x-4'>
                  <div class=' text-xl font-semibold tracking-tigh uppercase'>
                    Dhaka bank
                  </div>

                  <div class='inline-flex flex-col items-center justify-center'>
                    <svg
                      class='h-8 w-8'
                      width='24'
                      height='24'
                      strokeWidth='1.5'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M2 15V9C2 5.68629 4.68629 3 8 3H16C19.3137 3 22 5.68629 22 9V15C22 18.3137 19.3137 21 16 21H8C4.68629 21 2 18.3137 2 15Z'
                        stroke='currentColor'
                        strokeWidth='1.5'
                      ></path>
                      <path
                        d='M13 15.5V12.7M15.8571 12.7C16.5714 12.7 18 12.7 18 10.6C18 8.5 16.5714 8.5 15.8571 8.5L13 8.5V12.7M15.8571 12.7C14.7143 12.7 13.4762 12.7 13 12.7M15.8571 12.7L18 15.5'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      ></path>
                      <path
                        d='M11 8.5L8 15.5L5 8.5'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      ></path>
                    </svg>

                    {/* <div class='font-semibold text-white'>wallet</div> */}
                  </div>
                </div>

                <div class='inline-block w-12 h-8 bg-gradient-to-tl from-yellow-200 to-yellow-100 rounded-md shadow-inner overflow-hidden'>
                  <div class='relative w-full h-full grid grid-cols-2 gap-1'>
                    <div class='absolute border border-gray-900 rounded w-4 h-6 left-4 top-1'></div>
                    <div class='border-b border-r border-gray-900 rounded-br'></div>
                    <div class='border-b border-l border-gray-900 rounded-bl'></div>
                    <div class=''></div>
                    <div class=''></div>
                    <div class='border-t border-r border-gray-900 rounded-tr'></div>
                    <div class='border-t border-l border-gray-900 rounded-tl'></div>
                  </div>
                </div>

                <div class=''>
                  <div class='text-xl font-semibold'> 1103004604001</div>
                  <div class='text-xs font-semibold tracking-tight'>
                    Anjana Foundation
                  </div>
                </div>
              </div>
            </div>

            <div class='relative'>
              <div class='absolute right-10 flex space-x-2 items-start bg-white text-gray-900 border-gray-200 shadow-2xl -mt-16 w-72 px-2 py-3 rounded-lg'>
                <div class='flex-initial'></div>

                <div class='flex-1 inline-flex items-start justify-between'>
                  <div>
                    <h2 class='text-sm font-semibold tracking-tight'>
                      A/C Name : ANJANA FOUNDATION
                    </h2>
                    <p class='text-sm text-gray-700 font-light'>
                      A/C NO 12345678910
                    </p>
                    <p class='text-sm text-gray-700 font-light'>
                      SWIFT CODE : CIBLBDDH
                    </p>
                    <p class='text-sm text-gray-700 font-light'>
                      ROUTING NO : 225150135
                    </p>
                    <p class='text-sm text-gray-700 font-light'>
                      BRANCHES : AGRABAD, CHITTAGONG
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BankCard;

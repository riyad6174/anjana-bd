import React from 'react';
import fundraising from '../../public/assets/fundraising.png';
import food from '../../public/assets/foodandwater.png';
import invasion from '../../public/assets/massiveInvasion.png';
import Image from 'next/image';

function Campaign() {
  return (
    <div className='bg-[#FAFAFA] py-10  px-24  sm:px-10 md:px-16 lg:px-32 xl:px-40 '>
      <div className='max-w-5xl mx-auto text-left'>
        <p className='text-green-600 text-lg font-semibold mb-4 text-center uppercase'>
          Our Campaign
        </p>
        <h2 className='text-black text-lg lg:text-lgl font-semibold mb-8'>
          Giving Help To Those Who Need It
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20 h-full'>
          {/* Card 1 */}
          <div className='bg-white rounded-lg overflow-hidden shadow-lg'>
            <Image
              src={fundraising}
              alt='Campaign 1'
              className='w-full h-56 p-3 md:object-scale-down object-contain'
            />
            <div className='p-6 pt-0'>
              <p className='text-black font-medium mb-2'>
                Fundraising for children and refugees from donbass
              </p>
              {/* <div className='flex justify-between text-gray-300 text-sm'>
                <p className='text-black text-sm '>$5,200</p>
                <p>$10,400</p>
              </div> */}
              {/* <div className='bg-gray-300 h-2 w-full mt-2 rounded-full'>
                <div className=' relative bg-green-600 h-2 rounded-lg w-28 mt-0'></div>
              </div> */}
              <div className='flex flex-row align-middle justify-between mb-[-20px] pb-[-10px]'>
                <button className='bg-green-600 rounded-md py-3 my-5 w-24 text-white text-xs mb-2'>
                  Donate Now
                </button>
                <p className='text-green-600 self-center'>See Details</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className='bg-white rounded-lg overflow-hidden shadow-lg'>
            <Image
              src={food}
              alt='Campaign 2'
              className='w-full h-56 p-3 md:object-scale-down object-contain'
            />
            <div className='p-6 pt-0'>
              <p className='text-black font-medium mb-2'>
                Food, water and medicine for shelter on the Dnieper
              </p>
              {/* <div className='flex justify-between text-gray-300 text-sm'>
                <p className='text-black text-sm '>$1,124</p>
                <p>$10,400</p>
              </div>
              <div className='bg-gray-300 h-2 w-full mt-2 rounded-full'>
                <div className=' relative bg-green-600 h-2 rounded-lg w-6 mt-0'></div>
              </div> */}
              <div className='flex flex-row align-middle justify-between mb-[-20px]'>
                <button className='bg-green-600 rounded-md py-3 my-5 w-24 text-white text-xs mb-2'>
                  Donate Now
                </button>
                <p className='text-green-600 self-center'>See Details</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className='bg-white rounded-lg overflow-hidden shadow-lg'>
            <Image
              src={invasion}
              alt='Campaign 3'
              className='w-full h-56 p-3 md:object-scale-down object-contain'
            />
            <div className='p-6 pt-0'>
              <p className='text-black font-medium mb-2'>
                massive invasion of Palestine, war in the Gaza strip
              </p>
              {/* <div className='flex justify-between text-gray-300 text-sm '>
                <p className='text-black text-sm '>$28,200</p>
                <p>$64,000</p>
              </div>
              <div className='bg-gray-300 h-2 w-full mt-2 rounded-full'>
                <div className=' relative bg-green-600 h-2 rounded-lg w-28 mt-0'></div>
              </div> */}
              <div className='flex flex-row align-middle justify-between mb-[-20px]'>
                <button className='bg-green-600 rounded-md py-3 my-5 w-24 text-white text-xs mb-2'>
                  Donate Now
                </button>
                <p className='text-green-600 self-center'>See Details</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Campaign;

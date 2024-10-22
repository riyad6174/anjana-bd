import React from 'react';
import fundraising from '../../public/assets/fundraising.png';
import food from '../../public/assets/foodandwater.png';
import invasion from '../../public/assets/massiveInvasion.png';
import Image from 'next/image';
import Link from 'next/link';

function Campaign({ campaigns }) {
  return (
    <div className=' bg-green-50 py-10  px-6  sm:px-10 md:px-10 lg:px-20 xl:px-40 '>
      <div className='max-w-5xl mx-auto text-left'>
        <p className='text-green-600 text-lg font-semibold mb-4 text-center uppercase'>
          Our Campaigns
        </p>
        <div className='flex  justify-end items-center'>
          <h2 className='text-black text-xs hidden  md:text-lg lg:text-lgl font-semibold mb-8'>
            Giving Help To Those Who Need It
          </h2>
        </div>
        <div className='py-4  text-center px-10 md:px-44 text-gray-500'>
          <p>
            {' '}
            <p>
              We work towards eradicating poverty by empowering families with
              sustainable solutions that improve their livelihoods and overall
              well-being.
            </p>
          </p>
        </div>

        <div className='grid grid-cols-2 md:pt-10 md:grid-cols-3 gap-3 md:gap-20 h-full'>
          {/* Card 1 */}
          {campaigns?.slice(0, 3)?.map((campaign) => {
            return (
              <div
                key={campaign._id}
                className='bg-white rounded-lg overflow-hidden shadow-lg'
              >
                <div className='h-32 md:h-56 md:p-3 overflow-hidden '>
                  <Image
                    src={`http://localhost:5000/img/${campaign?.image}`}
                    alt='Campaign 1'
                    height={400}
                    width={400}
                    className='w-full h-full     object-cover hover:scale-105 transition-all delay-75'
                  />
                </div>
                <div className='p-6 pt-0'>
                  <p className='font-normal text-gray-500 md:font-medium md:mb-2 text-xs md:text-lg line-clamp-1'>
                    {campaign?.title}
                  </p>
                  {/* <div className='flex justify-between text-gray-300 text-sm'>
                <p className='text-black text-sm '>$5,200</p>
                <p>$10,400</p>
              </div> */}
                  {/* <div className='bg-gray-300 h-2 w-full mt-2 rounded-full'>
                <div className=' relative bg-green-600 h-2 rounded-lg w-28 mt-0'></div>
              </div> */}
                  <div className='flex flex-col md:flex-row align-middle justify-between '>
                    <Link
                      href={`/campaign/${campaign._id}`}
                      className='bg-green-600 hover:bg-secondary text-center rounded-md py-2 md:py-3 my-2 md:my-5 w-full md:w-24 text-white text-xs '
                    >
                      Donate Now
                    </Link>
                    <Link
                      href={`/campaign/${campaign._id}`}
                      className='text-green-600 hover:border-secondary hover:text-secondary self-center text-xs border py-1 md:py-3 px-5 rounded-md border-green-600'
                    >
                      See Details
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className='flex justify-center pt-10'>
        <Link
          href='/campaigns'
          className='text-sm py-1 md:txt-sm hover:bg-green-100 transition-all bg-white border  border-green-600 cursor-pointer px-4 uppercase text-green-600  mb-8'
        >
          See More Campaigns
        </Link>
      </div>
    </div>
  );
}

export default Campaign;

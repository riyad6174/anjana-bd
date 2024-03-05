import { filePath } from '@/utils/network';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function SponsorCard({ sponsorData }) {
  return (
    <div className='flex-shrink-0 m-6 relative overflow-hidden bg-green-600 rounded-lg max-w-xs shadow-lg group'>
      <svg
        className='absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform'
        viewBox='0 0 375 283'
        fill='none'
        style={{ opacity: '0.1' }}
      >
        <rect
          x='159.52'
          y='175'
          width='152'
          height='152'
          rx='8'
          transform='rotate(-45 159.52 175)'
          fill='white'
        />
        <rect
          y='107.48'
          width='152'
          height='152'
          rx='8'
          transform='rotate(-45 0 107.48)'
          fill='white'
        />
      </svg>
      <div className='relative   flex items-center justify-center group-hover:scale-110 transition-transform'>
        <div
          className='block absolute w-68 h-48 bottom-0 left-0 -mb-24 ml-3'
          style={{
            background: 'radial-gradient(black, transparent 60%)',
            transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)',
            opacity: '0.2',
          }}
        ></div>
        <Image
          width={400}
          height={400}
          className='relative w-full h-56 object-cover grayscale'
          src={`${filePath}/${sponsorData?.image}`}
          alt=''
        />
      </div>
      <div className='relative text-white px-6 pb-6 mt-6'>
        <div className='flex flex-col space-y-4'>
          <Link
            href={`/sponsor/${sponsorData._id}`}
            className='block font-semibold text-md uppercase'
          >
            {sponsorData?.name}
          </Link>
          <span className='block font-thin  text-sm '>
            Yearly {sponsorData?.price}
          </span>
          <div className='flex justify-between'>
            <span>
              <Link
                href={`/sponsor/${sponsorData._id}`}
                className='text-center z-20 bg-green-300 rounded-sm  text-green-800 text-xs font-mono px-4 py-2 leading-none  items-center'
              >
                Read More
              </Link>
            </span>
            <span>
              <Link
                href={`/sponsor/${sponsorData._id}`}
                className='text-center z-20 bg-orange-300 rounded-sm text-orange-500 text-xs font-mono px-4 py-2 leading-none  items-center'
              >
                Sponsor
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SponsorCard;

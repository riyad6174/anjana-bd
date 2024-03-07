import React from 'react';
import groupPicture from '../../public/assets/groupVector.png';
import { AiFillCheckCircle } from 'react-icons/ai';
import Image from 'next/image';

function About() {
  return (
    <>
      <p className='text-green-600 font-semibold mb-4 text-center pt-10 uppercase text-xl'>
        Who we are
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2  px-8 sm:px-2 md:px-16 lg:px-32 xl:px-40'>
        {/* Column 1 with image */}

        <div className='p-10 md:p-10 sm:p-5 lg:p-12'>
          <Image
            src={groupPicture}
            alt='About Us'
            className='w-full h-full object-contain '
          />
        </div>

        {/* Column 2 with text content */}
        <div className='p-6 bg-white py-10 md:py-32 px-2 md:px-0 lg:p-20'>
          <h2 className='text-black font-bold mb-2 text-xl sm:text-2xl lg:text-4xl'>
            We&apos;re Non-Profit Charity <br />& NGO Organization
          </h2>
          <div className=' relative bg-green-600 h-1 rounded-lg w-14 mb-6'></div>
          <p className='text-gray-400 mb-6'>
            Join us and make your life more valuable and useful, be a part of us
            and contribute to the nation and state and the simplest for the
            environment and yourself
          </p>
          <ul className='list-inside mb-6'>
            <li className='text-black font-semibold'>
              <AiFillCheckCircle fill='lightblue' className='inline mr-2' />
              Support people in extreme need
            </li>
            <li className='text-black font-semibold'>
              <AiFillCheckCircle fill='lightblue' className='inline mr-2' />
              Largest global crowdfunding community
            </li>
            <li className='text-black font-semibold'>
              <AiFillCheckCircle fill='lightblue' className='inline mr-2' />
              Make the world a better place
            </li>
            <li className='text-black font-semibold'>
              <AiFillCheckCircle fill='lightblue' className='inline mr-2' />
              Share your love for community
            </li>
          </ul>
          {/* <button className='bg-green-600  rounded-md py-3 my-5 w-24 text-white text-xs mb-2'>
            About Us
          </button> */}
        </div>
      </div>
    </>
  );
}

export default About;

import React from 'react';
import activity from '../../public/assets/activitiesIcon.png';
import { FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import bgImage from '../../public/assets/herocolbg.png';
import Image from 'next/image';
import { BsPlus } from 'react-icons/bs';
import Link from 'next/link';

function Hero() {
  return (
    <div className='hero-bg flex bg-cover h-auto sm:h-[680px] w-full flex-col sm:flex-row justify-center py-7  px-8 sm:px-10 md:px-16 lg:px-32 xl:px-40'>
      <div className='flex-1 flex flex-col w-full justify-center text-left sm:justify-start sm:text-left mb-4 sm:mb-0'>
        <p className='text-md text-green-600 mb-2 pt-7'>
          TRUSTED CHARITY COMPANY
        </p>
        <h1 className='font-bold text-2xl sm:text-2xl md:text-4xl lg:text-5xl leading-snug mb-2'>
          <span className='text-black'>Let's Help And Make</span>
          <br />
          <span className='text-black'>
            People Smile By <span className='text-green-600'>Giving</span>
          </span>
          <br />
          <span className='text-black'>Of Yours</span>
        </h1>
        <p className='text-gray-400 leading-2 text-sm mb-4 md:text-lg w-1/2'>
          No matter how small the donation you give, It will mean a lot to them,
          let&apos;s donate now to help fellow humans in need
        </p>
        <div className='flex flex-row items-left  sm:space-x-14'>
          <button className='bg-green-600 rounded-md h-14 self-center py-1 px-10 md:px-10 justify-start  text-white text-xs'>
            Donate Here
          </button>
          <a href='#' className='inline ml-10'>
            <Image src={activity} width={80} alt='Link' />
          </a>
        </div>
      </div>
      <div className='flex-1'>
        {/* <div className='relative'>
          <Image
            src={bgImage}
            alt='Background Image'
            className='w-full px-7 sm:w-[90%] h-full flex-shrink flex-grow block'
          />
          <div className='absolute top-36 mt-4 lg:mt-16 sm:mt-10 ml-[-10px] sm:ml-4 left-56 self-center lg:px-14 sm:py-10 lg:w-[80%] w-[70%] sm:w-[60%] h-[80%] transform -translate-x-1/2 -translate-y-1/2 text-left text-black'>
            <button className='bg-[#1ad0d1] rounded-md py-3 my-5 w-24 text-white text-xs mb-2'>
              Education
            </button>
            <h2 className='text-xl sm:text-md lg:text-lg leading-5 font-semibold mb-2 mt-1'>
              Help Children Get out of Poverty & have a Future
            </h2>
            <p className='text-gray-400 leading-5 font-light text-sm my-5  mb-2'>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa.
            </p>
            <div className='bg-gray-100 rounded-sm h-14 w-full my-4 px-4'>
              <div className='relative bg-grey-300 mb-1 pt-5'>
                <div className='text-[#1ad0d1] text-xs font-light absolute bottom-1 left-16'>
                  29%
                </div>
                <div className='absolute bg-white h-1 rounded-lg w-full mt-0'></div>
                <div className=' relative bg-[#1ad0d1] h-1 rounded-lg w-20 mt-0'></div>
              </div>
              <div className='flex justify-between text-sm text-gray-600 mb-2 '>
                <div>
                  $5,480 <span className='text-gray-300'>Raised</span>
                </div>
                <div>
                  $20,000 <span className='text-gray-300'>Goal</span>
                </div>
              </div>
            </div>
            <div className='flex space-x-4 justify-between  mt-5 sm:mt-4 w-full'>
              <button className='border border-gray-400 rounded-md py-2 px-12 text-sm font-medium flex items-center'>
                <FaApple fill='black' size={16} className='mr-2' />
                Pay
              </button>
              <button className='border border-gray-400 rounded-md py-2 px-12 text-sm font-medium flex items-center'>
                <FcGoogle size={16} className='mr-2' />
                Pay
              </button>
            </div>
          </div>
        </div> */}
        <div class='flex flex-row flex-wrap -mx-2 pt-8'>
          <div class='w-full sm:w-1/2 h-32 md:h-48 mb-4 sm:mb-0  border'>
            <img
              src='./assets/hand.jpg'
              alt='1'
              className='object-cover grayscale'
            />
          </div>
          <div class='w-full sm:w-1/2 h-32 md:h-48 mb-4 sm:mb-0  border overflow-hidden'>
            <img
              src='./assets/child2.png'
              alt='1'
              className='object-cover grayscale w-full'
            />
          </div>{' '}
          <div class='w-full sm:w-1/2 h-32 md:h-48 mb-4 sm:mb-0  border'>
            <img
              src='./assets/old.jpg'
              alt='1'
              className='object-cover grayscale w-full h-full'
            />
          </div>{' '}
          <Link
            href='/projects'
            class='relative w-full sm:w-1/2 h-32 md:h-48 mb-4 sm:mb-0  border'
          >
            <img
              src='./assets/old2.jpg'
              alt='1'
              className='object-cover grayscale w-full h-full'
            />
            <div className='absolute flex justify-center items-center top-0 left-0 bg-black w-full h-full opacity-70 hover:opacity-80'>
              <button className='flex justify-center items-center text-white'>
                <BsPlus className='text-4xl ' />
                <span className='text-xl font-semibold'>
                  Explore All Projects
                </span>
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;

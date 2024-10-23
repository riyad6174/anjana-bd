import React, { useState } from 'react';
import activity from '../../public/assets/activitiesIcon.png';
import { FaApple, FaHeart } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import bgImage from '../../public/assets/herocolbg.png';
import Image from 'next/image';
import { BsPlus } from 'react-icons/bs';
import Link from 'next/link';
import { filePath } from '@/utils/network';
import { MdClose, MdMenu } from 'react-icons/md';

function Hero({ projects }) {
  const [showPopup, setshowPopup] = useState(false);
  const closePopup = () => {
    setshowPopup(false);
  };

  return (
    <div className=''>
      <div className='relative hero-bg flex bg-cover md:h-[580px] h-[680px] w-full flex-col sm:flex-row justify-center py-1 md:py-7  px-8 sm:px-10 md:px-16 lg:px-32 xl:px-40'>
        <div className='flex-1 flex flex-col w-full justify-center text-left sm:justify-start sm:text-left mb-4 sm:mb-0'>
          <p className='text-md text-green-600 mb-2 pt-7'>
            TRUSTED CHARITY COMPANY
          </p>
          <h1 className='font-bold  text-xl md:text-4xl lg:text-5xl leading-snug mb-2'>
            <span className='text-black'> Be the Light</span>
            <br />
            <span className='text-black'>
              in Someone’s Darkest <br />
              <span className='text-green-600'>Hour</span>
            </span>
            <br />
          </h1>
          <p className='text-gray-400 leading-2 text-sm mb-4 md:text-lg '>
            Support our mission to uplift underprivileged communities by
            providing access to clean water, healthcare, and education. Every
            contribution brings hope and a chance for a better life.
          </p>
          <div className='flex flex-row items-left  sm:space-x-14'>
            <Link href={'/contact-us'}>
              <button className='bg-green-600 hover:bg-secondary transition-colors delay-75 rounded-md h-10 self-center py-1 px-6 md:h-14 md:px-10 justify-start  text-white text-xs'>
                Donate Here
              </button>
            </Link>
            <button
              onClick={() => setshowPopup(!showPopup)}
              className='inline ml-10'
            >
              <Image src={activity} width={80} alt='Link' />
            </button>
          </div>
        </div>
        <div className='flex-1'>
          <div class='flex flex-row flex-wrap -mx-2 pt-8'>
            {projects.slice(0, 3)?.map((project) => {
              return (
                <div
                  key={project._id}
                  class=' w-1/2 md:w-1/2 h-32 md:h-48  overflow-hidden  border'
                >
                  <Link href={`/project/${project._id}`}>
                    <Image
                      src={`${filePath}/${project?.image}`}
                      height={300}
                      width={400}
                      alt='1'
                      className='object-cover transition ease-in-out delay-75 grayscale w-full h-full hover:grayscale-0 hover:scale-110'
                    />
                  </Link>
                </div>
              );
            })}
            {/* <div class='w-1/2 md:w-1/2 h-32 md:h-48   border overflow-hidden'>
            <img
              src='./assets/child2.png'
              alt='1'
              className='object-cover grayscale w-full h-full'
            />
          </div>{' '}
          <div class='w-1/2 md:w-1/2 h-32 md:h-48   border overflow-hidden'>
            <img
              src='./assets/old.jpg'
              alt='1'
              className='object-cover grayscale w-full h-full'
            />
          </div>{' '} */}
            <Link
              href='/projects'
              class='relative w-1/2 md:w-1/2 h-32 md:h-48 mb-4 sm:mb-0  border overflow-hidden'
            >
              <img
                src='./assets/project.jpg'
                alt='1'
                className='object-cover  w-full h-full'
              />
              <div className='absolute flex justify-center items-center top-0 left-0 bg-black w-full h-full opacity-50 hover:opacity-60'>
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

        {showPopup && (
          <div className=' fixed inset-0 bg-white z-50 transition-opacity duration-300'>
            <div className='flex items-center justify-center pt-2'>
              <button
                className='text-2xl text-green-600 rounded-full border  p-6 bg-green-100'
                onClick={() => setshowPopup(!showPopup)}
              >
                <MdClose className='text-4xl' />
              </button>
            </div>
            <div className='flex justify-center w-full p-2'>
              {/* YouTube video embed component */}
              <iframe
                width='1400'
                height='600'
                src='https://www.youtube.com/embed/3F6mq20QOcE?si=VyNKEokgLKV9M3g8??autoplay=1&mute=1'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
        {/* <div
          className={`${
            showPopup
              ? ' w-full h-screen absolute bg-black bg-opacity-50  z-50'
              : 'hidden'
          }`}
        ></div> */}
      </div>
    </div>
  );
}

export default Hero;

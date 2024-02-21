import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { MdOutlineKeyboardArrowDown, MdMenu, MdClose } from 'react-icons/md';
import logo from '../../public/assets/onjona-logo.png';
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className='bg-white h-16 flex items-center justify-between p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10  px-8 sm:px-10 md:px-16 lg:px-32 xl:px-40'>
      <Link href='/' className='flex items-center'>
        <Image
          width={400}
          height={400}
          src={logo}
          alt='Logo'
          className='w-36 h-36 mr-2'
        />
        {/* <p className='text-black font-semibold text-sm'>Donaty</p> */}
      </Link>
      <div
        className={`hidden sm:flex items-center ml-auto space-x-5 ${
          isCollapsed ? 'hidden' : 'flex'
        }`}
      >
        <ul className='flex items-center text-xs md:text-sm space-x-5'>
          <li>
            <Link href='/special-meal' className='text-green-600'>
              Special Meal
            </Link>
          </li>
          <li>
            <Link href='/campaign' className='text-green-600'>
              Our Campaign
            </Link>
          </li>
          {/* <li>
            <Link href='/about-us' className='text-green-600'>
              About Us
            </Link>
          </li> */}
          <li>
            <Link href='/login' className='text-green-600'>
              Sign In
            </Link>
          </li>
          <li>
            <Link href='/dashboard' className='text-green-600'>
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href='/donate'
              className='border border-violet-300 text-violet-600 text-xs font-bold py-2 px-3 md:py-3 md:px-4 lg:py-4 lg:px-5 rounded-md flex items-center'
            >
              Donate Now
              <FaHeart size={16} className='ml-2' />
            </Link>
          </li>
        </ul>
      </div>
      <div className='sm:hidden flex items-center'>
        <button className='text-2xl text-green-600' onClick={toggleCollapse}>
          {isCollapsed ? <MdClose /> : <MdMenu />}
        </button>
      </div>
      {isCollapsed && (
        <div className='sm:hidden fixed inset-0 bg-white z-50 transition-opacity duration-300'>
          <div className='flex justify-end p-4'>
            <button
              className='text-2xl text-green-600'
              onClick={toggleCollapse}
            >
              <MdClose />
            </button>
          </div>
          <ul className='flex flex-col items-center text-xl'>
            <li>
              <a href='#' className='text-green-600 py-4'>
                Who we are
              </a>
            </li>
            <li>
              <a href='#' className='text-green-600 py-4'>
                Our Campaign
              </a>
            </li>
            <li>
              <a href='#' className='text-green-600 py-4'>
                News
              </a>
            </li>
            <li>
              <a href='#' className='text-green-600 py-4'>
                Contact Us
              </a>
            </li>
            <li>
              <button className='border border-green-300 text-green-600 text-xs font-bold py-2 px-3 md:py-3 md:px-4 rounded-md flex items-center'>
                Donate Now
                <FaHeart size={13} className='ml-2' />
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;

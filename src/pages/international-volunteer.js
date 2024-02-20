import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import React from 'react';

function Page() {
  return (
    <div>
      <div className=''>
        <img
          src='./assets/volunteer4.jpg'
          alt='child'
          className='h-64 w-full object-cover grayscale'
        />
      </div>
      <div className=' bg-green-600 text-end text-xs md:text-sm py-3 uppercase text-white   space-x-6'>
        {/* <Link href='/volunteer' className=' px-4'>
          Join as Volunteer
        </Link> */}

        <Link href='/volunteer ' className='px-10 underline '>
          Join as Volunteer
        </Link>
      </div>
      <div className='text-center text-green-600 text-xl uppercase py-6'>
        <span className='border-b-2'>Join as International Volunteer</span>
      </div>
      <form className='max-w-4xl mx-auto p-4 pt-10 bg-white rounded-md  grid grid-cols-3 gap-4'>
        <div className='mb-4'>
          <label className='block text-sm font-semibold text-gray-600'>
            FIRST NAME *
          </label>
          <input
            type='text'
            className='w-full p-2 border rounded-md'
            placeholder='Enter Your First Name'
          />
        </div>

        <div className='mb-4'>
          <label className='block text-sm font-semibold text-gray-600'>
            LAST NAME *
          </label>
          <input
            type='text'
            className='w-full p-2 border rounded-md'
            placeholder='Enter Your Last Name'
          />
        </div>

        <div className='mb-4'>
          <label className='block text-sm font-semibold text-gray-600'>
            EMAIL *
          </label>
          <input
            type='email'
            className='w-full p-2 border rounded-md'
            placeholder='Enter Your Email'
          />
        </div>

        <div className='mb-4'>
          <label className='block text-sm font-semibold text-gray-600'>
            CONTACT NO *
          </label>
          <input
            type='tel'
            className='w-full p-2 border rounded-md'
            placeholder='Enter Contact Number'
          />
        </div>

        <div className='mb-4'>
          <label className='block text-sm font-semibold text-gray-600'>
            GENDER *
          </label>
          <select className='w-full p-2 border rounded-md'>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
            {/* Add other gender options */}
          </select>
        </div>

        <div className='mb-4'>
          <label className='block text-sm font-semibold text-gray-600'>
            NATIONALITY *
          </label>
          <input
            type='text'
            className='w-full p-2 border rounded-md'
            placeholder='Enter Country Name'
          />
        </div>

        <div className='mb-4'>
          <label className='block text-sm font-semibold text-gray-600'>
            YOUR INTEREST *
          </label>
          <input
            type='text'
            className='w-full p-2 border rounded-md'
            placeholder='Enter Your Interest'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-sm font-semibold text-gray-600'>
            YOUR ADDRESS *
          </label>
          <input
            type='text'
            className='w-full p-2 border rounded-md'
            placeholder='Enter Your Interest'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-sm font-semibold text-gray-600'>
            EMERGENCY CONTACT DETAILS *
          </label>
          <input
            type='text'
            className='w-full p-2 border rounded-md'
            placeholder='Enter Your Interest'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-sm font-semibold text-gray-600'>
            BIOGRAPHY *
          </label>
          <input
            type='text'
            className='w-full p-2 border rounded-md'
            placeholder='Enter Your Interest'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-sm font-semibold text-gray-600'>
            VOLUNTEERITY START DATE *
          </label>
          <input
            type='text'
            className='w-full p-2 border rounded-md'
            placeholder='Enter Your Interest'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-sm font-semibold text-gray-600'>
            VOLUNTEERITY END DATE *
          </label>
          <input
            type='text'
            className='w-full p-2 border rounded-md'
            placeholder='Enter Your Interest'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-sm font-semibold text-gray-600'>
            PASSPORT NO *
          </label>
          <input
            type='text'
            className='w-full p-2 border rounded-md'
            placeholder='Enter Your Interest'
          />
        </div>

        {/* Add the remaining form fields with similar structure */}

        <div className='mb-4'>
          <label className='block text-sm font-semibold text-gray-600'>
            YOUR PICTURE *
          </label>
          <input
            type='file'
            className='w-full p-2 border rounded-md'
            placeholder='Enter Your Interest'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-sm font-semibold text-gray-600'>
            PASSPORT IMAGE (SACN COPY) *
          </label>
          <input
            type='file'
            className='w-full p-2 border rounded-md'
            placeholder='Enter Your Interest'
          />
        </div>
        <div className='col-span-2 mt-4'>
          <button
            type='submit'
            className='bg-green-500 text-white px-4 py-2 rounded-md '
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Page;

import Link from 'next/link';
import { useState } from 'react';
import { BsHeartFill } from 'react-icons/bs';
import { FaHeart } from 'react-icons/fa';

export const Footer2 = () => {
  const [userEmail, setUserEmail] = useState('');

  const handleSendEmail = () => {
    // This will open the user's default email app with a predefined recipient and body text
    window.location.href = `mailto:niloy0929@gmail.com?subject=Donation Query&body=Please share details. My email: ${userEmail}`;
  };
  return (
    <div className='bg-green-200'>
      <div className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
        <div className='grid gap-10 row-gap-6 mb-8 grid-cols-2 lg:grid-cols-4'>
          <div className='col-span-2'>
            <div>
              <h2 className='text-2xl font-bold text-gray-900'>
                Get the latest news!
              </h2>
              <p className='mt-4 text-gray-500'>
                Be the first to know! Sign up for Charity&apos;s newsletter to
                receive exclusive news, event announcements, and inspiring
                stories that showcase the power of community and compassion in
                action.
              </p>
            </div>
          </div>

          <div className='col-span-2 lg:col-span-2 lg:flex lg:items-end'>
            {/* this form submission will open email app and send email to niloy0929@gmail.com*/}
            <form
              className='w-full'
              onSubmit={(e) => {
                e.preventDefault();
                handleSendEmail();
              }}
            >
              <label htmlFor='UserEmail' className='sr-only'>
                Email
              </label>
              <div className='border border-gray-100 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4'>
                <input
                  type='email'
                  id='UserEmail'
                  placeholder='youremail@mail.com'
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  className='w-full border-none py-3 px-4 focus:border-transparent focus:ring-transparent sm:text-sm'
                  required
                />
                <button
                  type='submit'
                  className='mt-1 w-full bg-green-600 hover:bg-secondary px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none sm:mt-0 sm:w-auto sm:shrink-0'
                >
                  Send
                </button>
              </div>
            </form>
          </div>

          {/* Organization Info Section */}
          <div className='col-span-2  md:col-span-2 flex flex-col mb-6'>
            <Link
              href='/'
              aria-label='Go home'
              title='Company'
              className='inline-flex items-center'
            >
              <span className='text-xl font-bold tracking-wide text-gray-800 uppercase'>
                Anjana Foundation
              </span>
            </Link>
            <div className='mt-6 lg:max-w-sm'>
              <p className='text-sm text-gray-800'>
                Anjana Foundation is dedicated to uplifting marginalized
                communities through education, healthcare, and social
                empowerment initiatives, fostering a brighter future for all.
                Join us in making a significant impact today.
              </p>
              <Link
                href={'/contact-us'}
                className='bg-green-600 hover:bg-secondary flex gap-2 px-4 py-2 my-4 rounded-md w-1/2 justify-center items-center text-white'
              >
                <FaHeart size={16} className='ml-2' />
                <p>Donate Now</p>
              </Link>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className='flex col-span-2  md:col-span-1 flex-col mb-6'>
            <p className='text-base font-bold tracking-wide text-gray-900 uppercase'>
              Quick Links
            </p>
            <ul className='mt-6 space-y-4 text-sm'>
              <li>
                <Link
                  href='/about-us'
                  className='text-gray-700 transition hover:opacity-75'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href='/contact-us'
                  className='text-gray-700 transition hover:opacity-75'
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href='/faq'
                  className='text-gray-700 transition hover:opacity-75'
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href='/audit-report'
                  className='text-gray-700 transition hover:opacity-75'
                >
                  Audit Reports
                </Link>
              </li>
              <li>
                <Link
                  href='/teams'
                  className='text-gray-700 transition hover:opacity-75'
                >
                  Meet the Team
                </Link>
              </li>
              <li>
                <Link
                  href='/gallery'
                  className='text-gray-700 transition hover:opacity-75'
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className='flex col-span-2 md:col-span-1 flex-col mb-6'>
            <span className='text-base font-bold tracking-wide text-gray-900 uppercase'>
              Contact
            </span>
            <div className='flex'>
              <p className='mr-1 text-gray-800'>Phone:</p>
              <a
                href='tel:850-123-5021'
                aria-label='Our phone'
                title='Our phone'
                className='transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800'
              >
                +8801914075757
              </a>
            </div>
            <div className='flex'>
              <p className='mr-1 text-gray-800'>Email:</p>
              <a
                href='mailto:niloy0929@gmail.com'
                aria-label='Our email'
                title='Our email'
                className='transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800'
              >
                niloy0929@gmail.com
              </a>
            </div>
            <div className='flex'>
              <p className='mr-1 text-gray-800'>Address:</p>
              <a
                href='https://www.google.com/maps'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Our address'
                title='Our address'
                className='transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800'
              >
                Ruprampur, Thukra, Dumuria, Khulna
              </a>
            </div>
            <div className='flex items-center mt-4 space-x-3'>
              <Link
                href='/'
                className='text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400'
              >
                <svg viewBox='0 0 24 24' fill='currentColor' className='h-5'>
                  <path d='M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z' />
                </svg>
              </Link>
              <Link
                href='/'
                className='text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400'
              >
                <svg viewBox='0 0 30 30' fill='currentColor' className='h-6'>
                  <circle cx='15' cy='15' r='4' />
                  <path d='M19.999,3h-10C6.14,3,3,6.141,3,10v10c0,3.859,3.14,7,7.999,7h10c4.859,0,8.001-3.141,8.001-7V10 C28,6.141,24.857,3,19.999,3z M15,18c-4.41,0-8-3.589-8-8c0-4.411,3.589-8,8-8s8,3.589,8,8C23,14.411,19.411,18,15,18z' />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className='flex justify-center items-center py-5'>
          <p className='text-sm text-gray-500'>
            © Copyright 2024 Anjana Foundation. All Rights Reserved.{' '}
            <span className='text-gray-600'>
              Crafted with <BsHeartFill className='inline text-red-500' /> by
              Niloy
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

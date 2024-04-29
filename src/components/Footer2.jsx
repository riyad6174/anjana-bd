import Link from 'next/link';
import { BsHeartFill } from 'react-icons/bs';
import { FaHeart } from 'react-icons/fa';

export const Footer2 = () => {
  return (
    <div className='bg-green-200'>
      <div className='px-4 pt-16  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
        <div className='grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4'>
          <div class='col-span-2'>
            <div>
              <h2 class='text-2xl font-bold text-gray-900'>
                Get the latest news!
              </h2>

              <p class='mt-4 text-gray-500'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
                non cupiditate quae nam molestias.
              </p>
            </div>
          </div>

          <div class='col-span-2 lg:col-span-2 lg:flex lg:items-end'>
            <form class='w-full'>
              <label for='UserEmail' class='sr-only'>
                {' '}
                Email{' '}
              </label>

              <div class='border border-gray-100 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4'>
                <input
                  type='email'
                  id='UserEmail'
                  placeholder='john@rhcp.com'
                  class='w-full border-none py-3 px-4 focus:border-transparent focus:ring-transparent sm:text-sm'
                />

                <button class='mt-1 w-full bg-green-600 hover:bg-secondary px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none  sm:mt-0 sm:w-auto sm:shrink-0'>
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className='sm:col-span-2'>
            <Link
              href='/'
              aria-label='Go home'
              title='Company'
              className='inline-flex items-center'
            >
              {/* <svg
                className='w-8 text-deep-purple-accent-400'
                viewBox='0 0 24 24'
                strokeLinejoin='round'
                strokeWidth='2'
                strokeLinecap='round'
                strokeMiterlimit='10'
                stroke='currentColor'
                fill='none'
              >
                <rect x='3' y='1' width='7' height='12' />
                <rect x='3' y='17' width='7' height='6' />
                <rect x='14' y='1' width='7' height='6' />
                <rect x='14' y='11' width='7' height='12' />
              </svg> */}
              <span className=' text-xl font-bold tracking-wide text-gray-800 uppercase'>
                Anjana Foundation
              </span>
            </Link>
            <div className='mt-6 lg:max-w-sm'>
              <p className='text-sm text-gray-800'>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
              <p className='mt-4 text-sm text-gray-800'>
                Eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo.
              </p>
              <Link
                href={'/donate'}
                className='bg-green-600 hover:bg-secondary flex gap-2 px-4 py-2 my-4 rounded-md w-1/2 justify-center items-center text-white'
              >
                <FaHeart size={16} className='ml-2' />
                <p>Donate Now</p>
              </Link>
            </div>
          </div>
          <div className='space-y-2 text-sm'>
            <p className='text-base font-bold tracking-wide text-gray-900 uppercase'>
              Quick Links
            </p>
            <ul class='mt-6 space-y-4 text-sm'>
              <li>
                <Link
                  href='/audit-report'
                  class='text-gray-700 transition hover:opacity-75'
                >
                  {' '}
                  Audit Reports{' '}
                </Link>
              </li>

              <li>
                <Link
                  href='/teams'
                  class='text-gray-700 transition hover:opacity-75'
                >
                  {' '}
                  Meet the Team{' '}
                </Link>
              </li>

              <li>
                <Link
                  href='/gallery'
                  class='text-gray-700 transition hover:opacity-75'
                >
                  {' '}
                  Gallery{' '}
                </Link>
              </li>
            </ul>
          </div>
          <div>
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
                850-123-5021
              </a>
            </div>
            <div className='flex'>
              <p className='mr-1 text-gray-800'>Email:</p>
              <a
                href='mailto:info@lorem.mail'
                aria-label='Our email'
                title='Our email'
                className='transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800'
              >
                info@lorem.mail
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
                312 Lovely Street, NY
              </a>
            </div>
            <div className='flex items-center mt-4 space-x-3 '>
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
                  <path d='M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z' />
                </svg>
              </Link>
              <Link
                href='/'
                className='text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400'
              >
                <svg viewBox='0 0 24 24' fill='currentColor' className='h-5'>
                  <path d='M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z' />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className='flex flex-col-reverse justify-between pt-5 pb-10 border-t border-green-300 lg:flex-row'>
          <p class='text-xs text-gray-500'>
            &copy; Copyright @2024 Anjaana Foundation All Right Reserved &
            Development Partner{' '}
            <a
              className='font-semibold'
              target='_blank'
              href='https://onvirtualworld.com/'
            >
              {' '}
              “On Virtual World”
            </a>
          </p>

          <ul className='flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row'>
            <li>
              <Link
                href='/faq'
                className='text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400'
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href='/bank-details'
                className='text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400'
              >
                Bank Details
              </Link>
            </li>
            <li>
              <Link
                href='/'
                className='text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400'
              >
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

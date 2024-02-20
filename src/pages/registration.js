import Link from 'next/link';
import React from 'react';

function Page() {
  return (
    <>
      <div class='flex h-screen'>
        <div class='hidden lg:flex items-center justify-center flex-1 bg-black text-black'>
          <div class='max-w-md text-center'>
            <img
              className='grayscale'
              src='https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
          </div>
        </div>
        <div class='w-full bg-gray-100 lg:w-1/2 flex items-center justify-center'>
          <div class='max-w-md w-full p-6'>
            <h1 class='text-3xl font-semibold mb-6 text-black text-center'>
              Sign Up
            </h1>
            <h1 class='text-sm font-semibold mb-6 text-gray-500 text-center'>
              Join to Our Community with all time access and free{' '}
            </h1>

            <div class='mt-4 text-sm text-gray-600 text-center'>
              <p>Registrar with Your Details</p>
            </div>
            <form action='#' method='POST' class='space-y-4'>
              <div>
                <label
                  for='username'
                  class='block text-sm font-medium text-gray-700'
                >
                  Username
                </label>
                <input
                  type='text'
                  id='username'
                  name='username'
                  class='mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300'
                />
              </div>
              <div>
                <label
                  for='email'
                  class='block text-sm font-medium text-gray-700'
                >
                  Email
                </label>
                <input
                  type='text'
                  id='email'
                  name='email'
                  class='mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300'
                />
              </div>
              <div>
                <label
                  for='password'
                  class='block text-sm font-medium text-gray-700'
                >
                  Password
                </label>
                <input
                  type='password'
                  id='password'
                  name='password'
                  class='mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300'
                />
              </div>
              <div>
                <button
                  type='submit'
                  class='w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300'
                >
                  Sign Up
                </button>
              </div>
            </form>
            <div class='mt-4 text-sm text-gray-600 text-center'>
              <p>
                Already have an account?{' '}
                <Link href='/login' class='text-black hover:underline'>
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;

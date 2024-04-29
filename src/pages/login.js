import { login } from '@/utils/redux/authSlice';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function Page() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [formData, setFormData] = useState({
    contact: '',
    password: '',
  });

  const loginURL = 'http://localhost:5000/api/user-login';
  // const loginURL = ' https://api.theanjanafoundation.org/api/user-login';

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.contact && formData.password !== '') {
      try {
        const response = await fetch(`${loginURL}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          // Handle successful submission
          setMessage('Login Successful! Redirecting to Homepage...');
          dispatch(login(response.data));

          // Redirect to homepage after 2 seconds
          setTimeout(() => {
            router.push('/'); // Replace '/' with the homepage URL
          }, 1000);
        } else {
          // Handle error response
          console.error('Failed to submit form:', response.statusText);
          setMessage('Login Failed! Please Try Again.');
        }
      } catch (error) {
        console.error('Error submitting form:', error.message);
      }
    } else {
      setMessage('Please Enter Credentials!');
    }
  };
  return (
    <>
      <div class='flex h-screen'>
        <div class='w-full bg-indigo-50 lg:w-full flex items-center justify-center'>
          <div class='max-w-md w-full p-6'>
            <h1 class='text-3xl font-semibold mb-6 text-black text-center'>
              Sign In
            </h1>
            {/* <h1 class='text-sm font-semibold mb-6 text-gray-500 text-center'>
              Join to Our Community with all time access and free{' '}
            </h1> */}

            <div class='mt-4 text-sm text-gray-600 text-center'>
              <p>Login with Your Details</p>
            </div>
            <form onSubmit={handleSubmit} class='space-y-4'>
              <div>
                <label
                  for='contact'
                  class='block text-sm font-medium text-gray-700'
                >
                  Email
                </label>
                <input
                  type='text'
                  id='contact'
                  value={formData.contact}
                  onChange={handleChange}
                  name='contact'
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
                  value={formData.password}
                  onChange={handleChange}
                  name='password'
                  class='mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300'
                />
              </div>
              <div>
                <button
                  type='submit'
                  class='w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300'
                >
                  Sign In
                </button>
              </div>
            </form>
            <div class='mt-4 text-sm text-gray-600 text-center'>
              <p>
                Don&apos;t have an account?{' '}
                <Link href='/registration' class='text-black hover:underline'>
                  Register here
                </Link>
              </p>
            </div>
            {message && (
              <div className='text-center  text-gray-600 my-4 py-2 bg-indigo-200'>
                <p>{message}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;

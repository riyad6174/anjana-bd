import { CustomTooltip } from '@/components/CustomTooltip';
import React, { useState } from 'react';

const SelectableField = ({
  options,
  onSelect,
  selectedOption,
  inputFieldValue,
  onInputChange,
}) => {
  const handleOptionClick = (option) => {
    if (inputFieldValue === '') {
      // Only change the selected option if the input field is empty
      onSelect(option);
    } else {
      // Clear input and unselect the option if the user tries to write in the input field
      onInputChange('');
      onSelect(null);
    }
  };

  return (
    <div className='flex gap-2'>
      {options?.map((option) => (
        <CustomTooltip key={option._id} content={` ${option.details}`}>
          <div
            className={`py-2 px-8 text-black border border-black flex items-center justify-center cursor-pointer ${
              selectedOption === option && 'bg-green-600 text-white'
            }`}
            onClick={() => handleOptionClick(option)}
          >
            {option.amount}
          </div>
        </CustomTooltip>
      ))}
    </div>
  );
};

const DonatePage = ({ amounts }) => {
  const [selectedOption, setSelectedOption] = useState(amounts[0]);
  const [inputValue, setInputValue] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  console.log(amounts);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    // Unselect the option if the user tries to write in the input field
    setSelectedOption(null);
  };

  return (
    <div>
      <div className='pt-4'>
        <img
          src='./assets/child.jpg'
          alt='child'
          className='h-64 w-full object-cover grayscale'
        />
      </div>
      <form className='flex flex-col container py-16 px-4'>
        <label className='uppercase text-xs font-semibold text-gray-400 mb-2'>
          Select Amount
        </label>
        <div className='flex justify-start items-center flex-wrap gap-2'>
          <SelectableField
            options={amounts}
            onSelect={setSelectedOption}
            selectedOption={selectedOption}
            inputFieldValue={inputValue}
            onInputChange={handleInputChange}
          />

          <div className=''>
            <input
              type='text'
              value={inputValue}
              onChange={handleInputChange}
              className='w-full py-2 border px-2 border-black'
              placeholder='Custom amount'
            />
          </div>
        </div>
        <div className='mt-4'>
          {/* Message field */}
          <textarea
            className='w-full p-2 border border-gray-300'
            placeholder='Your message here'
          ></textarea>
          <div class='my-5'>
            <div class='flex items-center space-x-6'>
              <div class='flex items-center'>
                <input
                  type='checkbox'
                  name='radio1'
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                  id='radioButton1'
                  class='h-5 w-5'
                />
                <label
                  for='radioButton1'
                  class='pl-3 text-sm font-medium text-[#07074D]'
                >
                  I DON&apos;T WANT TO PROVIDE MY INFORMATION
                </label>
              </div>
            </div>
          </div>
          {!isChecked && (
            <div className='grid grid-cols-3 gap-8 mb-4'>
              <div className='flex flex-col col-span-3 md:col-span-1'>
                <label className='uppercase text-xs font-semibold mb-2 text-gray-400'>
                  Name
                </label>
                <input type='text' className='border border-gray-300 p-2' />
              </div>
              <div className='flex flex-col col-span-3 md:col-span-1'>
                <label className='uppercase text-xs font-semibold mb-2 text-gray-400'>
                  Email
                </label>
                <input type='email' className='border border-gray-300 p-2' />
              </div>
              <div className='flex flex-col col-span-3 md:col-span-1'>
                <label className='uppercase text-xs font-semibold mb-2 text-gray-400'>
                  Contact number
                </label>
                <input type='text' className='border border-gray-300 p-2' />
              </div>
            </div>
          )}
        </div>
        <div className='text-center flex items-center justify-center flex-col '>
          <div class='my-5'>
            <div class='flex items-center space-x-6'>
              <div class='flex items-center'>
                <input
                  type='checkbox'
                  name='radio1'
                  // checked={isChecked}
                  // onChange={() => setIsChecked(!isChecked)}
                  id='radioButton2'
                  class='h-5 w-5'
                />
                <label
                  for='radioButton2'
                  class='pl-3 text-sm font-medium text-[#07074D]'
                >
                  I DON&apos;T WANT TO RECEIVE ANY PROMOTIONAL MAIL
                </label>
              </div>
            </div>
          </div>
          <button
            type='button'
            onClick={toggleModal}
            class='text-center hover:shadow-form rounded-md bg-orange-400 py-3 px-8 text-base font-semibold text-white outline-none'
          >
            Donate
          </button>
        </div>
      </form>
      <div class=' mx-auto relative'>
        {isModalOpen && (
          <div
            id='authentication-modal'
            aria-hidden='true'
            className='fixed overflow-x-hidden overflow-y-auto h-modal md:h-full top-1/2 left-1/2 right-0 md:inset-0 z-50 justify-center items-center'
          >
            <div className='relative w-full max-w-md px-4 h-full md:h-auto'>
              {/* Modal content */}
              <div className='bg-white rounded-lg shadow relative dark:bg-gray-700'>
                <div className='flex justify-end p-2'>
                  <button
                    type='button'
                    className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white'
                    onClick={toggleModal}
                  >
                    <svg
                      className='w-5 h-5'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                  </button>
                </div>
                <form
                  class='space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8'
                  action='#'
                >
                  <h3 class='text-xl font-medium text-gray-900 dark:text-white'>
                    Sign in to our platform
                  </h3>
                  <div>
                    <label
                      for='email'
                      class='text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300'
                    >
                      Your email
                    </label>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      class='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                      placeholder='name@company.com'
                      required=''
                    />
                  </div>
                  <div>
                    <label
                      for='password'
                      class='text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300'
                    >
                      Your password
                    </label>
                    <input
                      type='password'
                      name='password'
                      id='password'
                      placeholder='••••••••'
                      class='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                      required=''
                    />
                  </div>
                  <div class='flex justify-between'>
                    <div class='flex items-start'>
                      <div class='flex items-center h-5'>
                        <input
                          id='remember'
                          aria-describedby='remember'
                          type='checkbox'
                          class='bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800'
                          required=''
                        />
                      </div>
                      <div class='text-sm ml-3'>
                        <label
                          for='remember'
                          class='font-medium text-gray-900 dark:text-gray-300'
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <a
                      href='#'
                      class='text-sm text-blue-700 hover:underline dark:text-blue-500'
                    >
                      Lost Password?
                    </a>
                  </div>
                  <button
                    type='submit'
                    class='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                  >
                    Login to your account
                  </button>
                  <div class='text-sm font-medium text-gray-500 dark:text-gray-300'>
                    Not registered?{' '}
                    <a
                      href='#'
                      class='text-blue-700 hover:underline dark:text-blue-500'
                    >
                      Create account
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DonatePage;

export async function getServerSideProps() {
  try {
    const res = await fetch('http://localhost:5000/api/frontend/donate-amount');
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const amounts = await res.json();

    return {
      props: {
        amounts,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return {
      props: {
        amounts: [],
      },
    };
  }
}

import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { baseURL, filePath } from '@/utils/network';
import Image from 'next/image';
import React, { useState } from 'react';

const SelectableField = ({
  options,
  onSelect,
  selectedOption,
  inputFieldValue,
  onInputChange,
}) => {
  console.log(options, 'opt');
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
    <div className='flex gap-2 '>
      {options?.map((option) => (
        <div
          key={option._id}
          className={`  py-2 px-8 rounded-full  text-black border border-black flex items-center justify-center cursor-pointer ${
            selectedOption?._id === option._id && 'bg-green-600 text-white'
          }`}
          onClick={() => handleOptionClick(option)}
        >
          {option.amount}
        </div>
      ))}
    </div>
  );
};

const DonatePage = ({ sponsor }) => {
  const mockData = ['12000', '24000', '40000', '100000'];
  const [selectedOption, setSelectedOption] = useState(mockData[0]);
  const [inputValue, setInputValue] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  console.log(sponsor);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    // Unselect the option if the user tries to write in the input field
    setSelectedOption(null);
  };

  return (
    <div className='mb-10'>
      <div>
        <img
          src='/assets/child.jpg'
          alt='child'
          className='h-64 w-full object-cover grayscale'
        />
      </div>
      <div className='grid grid-cols-4 px-10 pt-10 gap-x-6'>
        <div className='border-r-2 flex flex-col'>
          <Image
            width={400}
            height={400}
            src={`${filePath}/${sponsor[0].image}`}
            alt='project'
          />
          <p className='pr-2 text-xl '>{sponsor[0].name}</p>
          <p className='pr-2'>{sponsor[0].description}</p>
        </div>
        <div className='col-span-3'>
          <span className='text-3xl text-green-600 uppercase'>Sponsor Now</span>
          <form className='flex  flex-col container py-16'>
            <div className='flex justify-start items-center flex-wrap gap-2'>
              <SelectableField
                options={sponsor[0]?.amounts}
                onSelect={setSelectedOption}
                selectedOption={selectedOption}
                inputFieldValue={inputValue}
                onInputChange={handleInputChange}
              />

              <div className='px-2'>
                <input
                  type='text'
                  value={inputValue}
                  onChange={handleInputChange}
                  className='w-full py-2 border rounded-full px-2 border-black'
                  placeholder='Custom amount'
                />
              </div>
            </div>
            <div className='mt-4'>
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
                      class='pl-3 text-sm font-medium text-[#606069]'
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
                    <input
                      type='email'
                      className='border border-gray-300 p-2'
                    />
                  </div>
                  <div className='flex flex-col col-span-3 md:col-span-1'>
                    <label className='uppercase text-xs font-semibold mb-2 text-gray-400'>
                      Contact number
                    </label>
                    <input type='text' className='border border-gray-300 p-2' />
                  </div>
                </div>
              )}
              {/* Message field */}
            </div>

            <div className='text-center flex flex-col items-center justify-center'>
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
              <button class='text-center hover:shadow-form rounded-md bg-orange-400 py-3 px-8 text-base font-semibold text-white outline-none'>
                Donate
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;

export async function getServerSideProps({ params }) {
  const { id } = params;
  try {
    const res = await fetch(`${baseURL}/sponsor/${id}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch data. Status: ${res.status}`);
    }

    const sponsor = await res.json();

    return {
      props: {
        sponsor,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return {
      props: {
        sponsor: [],
      },
    };
  }
}

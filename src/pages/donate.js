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

  console.log(amounts);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    // Unselect the option if the user tries to write in the input field
    setSelectedOption(null);
  };

  return (
    <div>
      <div className=''>
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
          {/* Message field */}
          <textarea
            className='w-full p-2 border border-gray-300'
            placeholder='Your message here'
          ></textarea>
        </div>
        <div class='mb-5'>
          <div class='flex items-center space-x-6'>
            <div class='flex items-center'>
              <input
                type='checkbox'
                name='radio1'
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

        <div className='text-center '>
          <button class='text-center hover:shadow-form rounded-md bg-orange-400 py-3 px-8 text-base font-semibold text-white outline-none'>
            Donate
          </button>
        </div>
      </form>
    </div>
  );
};

export default DonatePage;

export async function getStaticProps() {
  const res = await fetch('http://localhost:5000/api/frontend/donate-amount');
  const amounts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      amounts,
    },
  };
}

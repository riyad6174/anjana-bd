import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
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
    <div className='flex gap-2 '>
      {options.map((option) => (
        <div
          key={option}
          className={`  py-2 px-8 rounded-full  text-black border border-black flex items-center justify-center cursor-pointer ${
            selectedOption === option && 'bg-green-600 text-white'
          }`}
          onClick={() => handleOptionClick(option)}
        >
          {option}
        </div>
      ))}
    </div>
  );
};

const DonatePage = () => {
  const mockData = ['12000', '24000', '40000', '100000'];
  const [selectedOption, setSelectedOption] = useState(mockData[0]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    // Unselect the option if the user tries to write in the input field
    setSelectedOption(null);
  };

  return (
    <div className='mb-10'>
      <div>
        <img
          src='./assets/child.jpg'
          alt='child'
          className='h-64 w-full object-cover grayscale'
        />
      </div>
      <div className='grid grid-cols-4 px-10 pt-10 gap-x-6'>
        <div className='border-r-2 flex flex-col'>
          <img src='https://placehold.co/600x400' alt='project' />
          {/* <p className='pr-2'>
            What is Lorem Ipsum? Lorem Ipsum is just dummy text used in the
            printing and typesetting industries. Since the 1500s, when an
            unknown printer scrambled a galley of type to make a type specimen
            book, Lorem Ipsum has been the industryas standard dummy text
          </p> */}
        </div>
        <div className='col-span-3'>
          <span className='text-3xl text-green-600 uppercase'>Donate Here</span>
          <form className='flex  flex-col container py-16'>
            <div className='flex justify-start items-center flex-wrap gap-2'>
              <SelectableField
                options={mockData}
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
                    I WANT TO PROVIDE MY INFORMATION
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
      </div>
    </div>
  );
};

export default DonatePage;

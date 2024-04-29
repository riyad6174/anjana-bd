import Contact from '@/components/Contact';
import { CustomTooltip } from '@/components/CustomTooltip';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { useRouter } from 'next/router';
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
            className={`py-2 px-8 text-black rounded-3xl border border-black flex items-center justify-center cursor-pointer ${
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

const DonatePage = ({ project }) => {
  const mockData = ['12000', '24000', '40000', '100000'];
  const [selectedOption, setSelectedOption] = useState(mockData[0]);
  const [inputValue, setInputValue] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const router = useRouter();
  //   const { id } = router.query;

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    // Unselect the option if the user tries to write in the input field
    setSelectedOption(null);
  };

  return (
    <div className='mb-10 pt-4'>
      <div>
        <img
          src='/assets/child.jpg'
          alt='child'
          className='h-64 w-full object-cover grayscale hidden md:block'
        />
      </div>
      <div className='grid grid-cols-4 px-10 pt-10 gap-x-6'>
        <div className='col-span-4 md:col-span-1 md:border-r-2 flex flex-col'>
          <Image
            src={`http://localhost:5000/img/${project[0]?.image}`}
            width={500}
            className='w-full'
            height={500}
            alt='project-image'
          />
          <p className='pr-2 pt-6 md:pt-0'>{project[0]?.description}</p>
        </div>
        <div className='col-span-4 md:col-span-3 '>
          <span className='text-3xl text-green-600 uppercase'>Donate Here</span>
          <form className='flex flex-col container py-8 px-4'>
            <label className='uppercase text-xs font-semibold text-gray-400 mb-2'>
              Select Amount
            </label>
            <div className='flex justify-start items-center flex-wrap gap-2'>
              <SelectableField
                options={project[0].amounts}
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
                  className='w-full py-2 border rounded-3xl px-2 border-black'
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
            </div>
            <div className='text-center flex items-center justify-center flex-col'>
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
              <button class='text-center hover:shadow-form rounded-md bg-green-600 hover:bg-secondary py-3 px-8 text-base font-semibold text-white outline-none'>
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
    const res = await fetch(`http://localhost:5000/api/frontend/project/${id}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch data. Status: ${res.status}`);
    }

    const project = await res.json();
    console.log(project, 'rdd');
    return {
      props: {
        project,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return {
      props: {
        project: [],
      },
    };
  }
}

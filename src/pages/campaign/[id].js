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
  console.log(project, 'project');
  const [selectedOption, setSelectedOption] = useState(
    project[0]?.amounts[0]?.amount
  );
  const [inputValue, setInputValue] = useState('');

  const router = useRouter();
  //   const { id } = router.query;

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
          className='h-64 w-full object-cover grayscale hidden md:block'
        />
      </div>
      <div className='grid grid-cols-4 px-10 pt-10 gap-x-6'>
        <div className='md:border-r-2 flex flex-col col-span-4 md:col-span-1 '>
          <Image
            src={`http://localhost:5000/img/${project[0]?.image}`}
            width={500}
            height={500}
            alt='project-image'
          />
          <p className='pr-2 text-2xl mb-2'>{project[0]?.title}</p>
          <p className='pr-2'>{project[0]?.description}</p>
        </div>
        <div className='col-span-4 md:col-span-3'>
          <span className='text-3xl text-green-600 uppercase'>Donate Here</span>
          <form className='flex  flex-col container py-10 md:py-16'>
            <div className='flex justify-start items-center flex-wrap gap-2'>
              <SelectableField
                options={project[0].amounts}
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

export async function getServerSideProps({ params }) {
  const { id } = params;
  try {
    const res = await fetch(
      `http://localhost:5000/api/frontend/campaign/${id}`
    );
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
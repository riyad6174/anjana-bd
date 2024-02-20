import React from 'react';

function ProjectCard() {
  return (
    <div>
      <div class='flex flex-col justify-center py-4 '>
        <div class='relative  flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg px-3 max-w-xs md:max-w-4xl mx-auto border border-white bg-white'>
          <div class='w-full md:w-1/4  bg-white grid place-items-center'>
            <img
              src='https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
              alt='tailwind logo'
              class='rounded-xl'
            />
          </div>
          <div class='w-full md:w-2/3 bg-white  flex flex-col justify-between space-y-2 p-3'>
            <div>
              <p class=' text-gray-800 md:text-xl text-xl '>
                Winter Clothes Distribution
              </p>
              <p class=' text-gray-500 text-base pt-6'>
                The best kept secret of The Bahamas is the country’s sheer size
                and diversity. With 16 major islands, The Bahamas is an
                unmatched destination
              </p>
            </div>
            <button class='block w-24 py-1 rounded-sm  font-thin bg-green-600 text-white'>
              Donate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

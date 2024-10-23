import React, { useState } from 'react';

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState('app');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Array of images
  const images = [
    {
      src: './assets/gallary/Image1.jpg',
      alt: 'Mountain view',
    },
    {
      src: './assets/gallary/Image2.jpg',
      alt: 'Forest and road',
    },
    {
      src: './assets/gallary/Image3.jpg',
      alt: 'River and sunset',
    },
    {
      src: './assets/gallary/Image4.jpg',
      alt: 'Urban nightscape',
    },
    {
      src: './assets/gallary/Image5.jpg',
      alt: 'Abstract art',
    },
    {
      src: './assets/gallary/Image6.jpg',
      alt: 'Beach and ocean',
    },
    {
      src: './assets/gallary/Image7.jpg',
      alt: 'Beach and ocean',
    },
  ];

  return (
    <>
      <div className='text-center py-10 text-xl uppercase text-green-600'>
        Gallery
      </div>
      <div className='w-full'>
        <ul
          className='flex flex-wrap  list-none  w-1/3  mx-auto bg-green-100'
          role='list'
        >
          <li
            className={`flex-auto text-center ${
              activeTab === 'app' ? 'bg-green-200' : ''
            }`}
          >
            <a
              className='flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out  rounded-lg cursor-pointer text-green-700 bg-inherit'
              onClick={() => handleTabClick('app')}
              role='tab'
              aria-selected={activeTab === 'app'}
            >
              <span className='ml-1 py-1 text-xs uppercase'>ALL</span>
            </a>
          </li>
          <li
            className={`flex-auto text-center ${
              activeTab === 'message' ? 'bg-green-200' : ''
            }`}
          >
            <a
              className='flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out  rounded-lg cursor-pointer text-green-700 bg-inherit'
              onClick={() => handleTabClick('message')}
              role='tab'
              aria-selected={activeTab === 'message'}
            >
              <span className='ml-1 py-1 text-xs uppercase'>
                Winter Event-2024
              </span>
            </a>
          </li>
          <li
            className={`flex-auto text-center ${
              activeTab === 'settings' ? 'bg-green-200' : ''
            }`}
          >
            <a
              className='flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out  rounded-lg cursor-pointer text-green-700 bg-inherit'
              onClick={() => handleTabClick('settings')}
              role='tab'
              aria-selected={activeTab === 'settings'}
            >
              <span className='ml-1 py-1 text-xs uppercase'>
                New Year Event
              </span>
            </a>
          </li>
        </ul>

        <div className='p-5'>
          <div
            className={`block ${
              activeTab === 'app' ? 'opacity-100' : 'hidden opacity-0'
            }`}
            role='tabpanel'
          >
            {/* Dynamic Images */}
            <div className='grid w-full grid-cols-3 gap-4 p-4 font-sans text-base antialiased font-light leading-relaxed text-gray-700 h-max'>
              {images.map((image, index) => (
                <div key={index}>
                  <img
                    className='w-full h-64 object-cover max-w-full rounded-lg'
                    src={image.src}
                    alt={image.alt}
                  />
                </div>
              ))}
            </div>
          </div>

          <div
            className={`block ${
              activeTab === 'message' ? 'opacity-100' : 'hidden opacity-0'
            }`}
            role='tabpanel'
          >
            {/* Winter Event Content */}
          </div>
          <div
            className={`block ${
              activeTab === 'settings' ? 'opacity-100' : 'hidden opacity-0'
            }`}
            role='tabpanel'
          >
            {/* New Year Event Content */}
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryPage;

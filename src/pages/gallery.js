import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState('app');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

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
            {/* App Tab Content */}
            {/* ... */}
            <div className='grid w-full grid-cols-3 gap-4 p-4 font-sans text-base antialiased font-light leading-relaxed text-gray-700 h-max'>
              <div>
                <img
                  class='w-full h-64 object-cover max-w-full rounded-lg'
                  src='https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2940&amp;q=80'
                  alt='image-photo'
                />
              </div>
              <div>
                <img
                  class='w-full h-64 object-cover max-w-full rounded-lg'
                  src='https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2762&amp;q=80'
                  alt='image-photo'
                />
              </div>
              <div>
                <img
                  class='w-full h-64 object-cover max-w-full rounded-lg'
                  src='https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2832&amp;q=80'
                  alt='image-photo'
                />
              </div>
              <div>
                <img
                  class='w-full h-64 object-cover max-w-full rounded-lg'
                  src='https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg'
                  alt='image-photo'
                />
              </div>
              <div>
                <img
                  class='w-full h-64 object-cover max-w-full rounded-lg'
                  src='https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg'
                  alt='image-photo'
                />
              </div>
              <div>
                <img
                  class='w-full h-64 object-cover max-w-full rounded-lg'
                  src='https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1493&amp;q=80'
                  alt='image-photo'
                />
              </div>
            </div>
          </div>
          <div
            className={`block ${
              activeTab === 'message' ? 'opacity-100' : 'hidden opacity-0'
            }`}
            role='tabpanel'
          >
            {/* Messages Tab Content */}
            {/* ... */}
          </div>
          <div
            className={`block ${
              activeTab === 'settings' ? 'opacity-100' : 'hidden opacity-0'
            }`}
            role='tabpanel'
          >
            {/* Settings Tab Content */}
            {/* ... */}
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryPage;

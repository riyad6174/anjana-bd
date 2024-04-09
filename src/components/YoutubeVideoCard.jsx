import React from 'react';
import { BsPlay } from 'react-icons/bs';

const YouTubeEmbed = ({ videoId, width, height }) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <>
      <div className='border rounded-md'>
        <div className=' flex justify-center px-4  py-4'>
          <iframe
            width={width || '560'}
            height={height || '315'}
            src={embedUrl}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
            loading={'lazy'}
          ></iframe>
        </div>
        <div className='px-4 py-2 flex items-center justify-between space-x-3'>
          <p>Winter Events 2024 Winter Events 2024 Winter Events 2024</p>
          <span className='rounded-full  border-2 border-green-600 p-2'>
            <BsPlay />
          </span>
        </div>
      </div>
    </>
  );
};

export default YouTubeEmbed;

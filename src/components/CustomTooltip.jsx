import React, { useState } from 'react';

export const CustomTooltip = ({ content, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className='relative inline-block'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {isHovered && (
        <div className='absolute bg-gray-800 w-40 text-sm  mt-2 text-white py-2 px-4 rounded-md shadow'>
          {content}
        </div>
      )}
    </div>
  );
};

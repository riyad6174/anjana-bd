import React from 'react';
import {
  FaEnvelope,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';

function Contact() {
  return (
    <div className='bg-green-600 h-7 flex font-light text-xs items-center justify-between py-1 px-8 sm:px-10 md:px-16 lg:px-32 xl:px-40'>
      <div className='flex items-center text-white text-xs flex-shrink-0'>
        <div className='mr-2'>
          <BsFillTelephoneFill fill='white' size={10} />
        </div>
        <div>
          <p className='hidden sm:block'>+8801914075757</p>
        </div>
        <div className='ml-4 sm:ml-7 mr-2'>
          <FaEnvelope fill='white' size={12} />
        </div>
        <div className='hidden sm:block'>
          <a href='mailto:niloy0929@gmail.com'>niloy0929@gmail.com</a>
        </div>
      </div>
      <div className='flex items-center'>
        <FaTwitter fill='white' size={12} className='mr-5' />
        <FaInstagram fill='white' size={12} className='mr-5' />
        <FaFacebookF fill='white' size={12} className='mr-5' />
        <FaYoutube fill='white' size={12} />
      </div>
    </div>
  );
}

export default Contact;

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import YouTubeEmbed from './YoutubeVideoCard';

function VideoSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,

    cssEase: 'linear',

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const videoID = [
    { id: 1, videoID: '3F6mq20QOcE?si=VyNKEokgLKV9M3g8' },
    { id: 2, videoID: '3F6mq20QOcE?si=VyNKEokgLKV9M3g8' },
    { id: 3, videoID: '3F6mq20QOcE?si=VyNKEokgLKV9M3g8' },
    { id: 4, videoID: '3F6mq20QOcE?si=VyNKEokgLKV9M3g8' },
    { id: 5, videoID: '3F6mq20QOcE?si=VyNKEokgLKV9M3g8' },
    { id: 6, videoID: '3F6mq20QOcE?si=VyNKEokgLKV9M3g8' },
  ];

  return (
    // <div className='slider-container'>
    //   <Slider {...settings}>
    //     <div>
    //       <h3>1</h3>
    //     </div>
    //     <div>
    //       <h3>2</h3>
    //     </div>
    //     <div>
    //       <h3>3</h3>
    //     </div>
    //     <div>
    //       <h3>4</h3>
    //     </div>
    //     <div>
    //       <h3>5</h3>
    //     </div>
    //     <div>
    //       <h3>6</h3>
    //     </div>
    //     <div>
    //       <h3>7</h3>
    //     </div>
    //     <div>
    //       <h3>8</h3>
    //     </div>
    //     <div>
    //       <h3>9</h3>
    //     </div>
    //   </Slider>
    // </div>
    <div className='px-4  py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
        <div></div>
        <h2 className='max-w-lg mb-6 font-sans text-xl uppercase font-normal  text-green-600 sm:text-md md:mx-auto'>
          <span className='relative inline-block'>
            <svg
              viewBox='0 0 52 24'
              fill='currentColor'
              className='absolute  opacity-50 top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
            >
              <defs>
                <pattern
                  id='1d4040f3-9f3e-4ac7-b117-7d4009658ced'
                  x='0'
                  y='0'
                  width='.135'
                  height='.30'
                >
                  <circle cx='1' cy='1' r='.7' />
                </pattern>
              </defs>
              <rect
                fill='url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)'
                width='52'
                height='24'
              />
            </svg>
            <span className='relative '>Event Videos</span>
          </span>{' '}
        </h2>
      </div>
      <div className='py-4  text-center px-10 md:px-44 text-gray-500'>
        <p>
          {' '}
          <p>
            Watch our event videos to see firsthand the incredible moments
            captured during our fundraising efforts. Together, we create lasting
            change and build a brighter future for those in need.
          </p>
        </p>
      </div>

      <div className='slider-container white-slider-bg'>
        <Slider {...settings}>
          {/* <div class='flex flex-wrap justify-center mt-10'> */}
          {videoID?.map((v) => {
            return (
              <div key={v.id} class='p-4 max-w-sm'>
                <YouTubeEmbed width='400' height='200' videoId={v?.videoID} />
              </div>
            );
          })}
          {/* </div> */}
        </Slider>
      </div>
      <div className='flex items-center justify-center pt-10'>
        <Link
          href='/videos'
          className='text-sm py-1  md:txt-sm bg-white border hover:bg-green-100 transition-all border-green-600 cursor-pointer px-4 mx-4 md:mx-0 uppercase text-green-600  mb-8'
        >
          See More Videos
        </Link>
      </div>
    </div>
  );
}

export default VideoSlider;

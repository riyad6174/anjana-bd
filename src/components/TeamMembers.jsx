// TeamMembers.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';

// Optional: Create a separate component for team member cards
const TeamMemberCard = ({ member }) => (
  <div className='bg-white'>
    <div className='relative overflow-hidden transition duration-300 px-1 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl'>
      <img
        className='object-cover w-full h-56 md:h-64 xl:h-80'
        src={member.image}
        alt={member.name}
      />
      <div className='absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100'>
        <p className='mb-1 text-lg font-bold text-gray-100'>{member.name}</p>
        <p className='mb-4 text-xs text-gray-100'>{member.role}</p>
        {/* <p className='mb-4 text-xs tracking-wide text-gray-400'>
          {member.description}
        </p> */}
        {/* <div className='flex items-center justify-center space-x-3'>
          {member.socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className='text-white transition-colors duration-300 hover:text-teal-accent-400'
            >
              <svg viewBox='0 0 24 24' fill='currentColor' className='h-5'>
                <path d={link.iconPath} />
              </svg>
            </Link>
          ))}
        </div> */}
      </div>
    </div>
  </div>
);

function TeamMembers() {
  const teamMembers = [
    {
      id: 1,
      name: 'Anindya Kumar Biswas',
      role: 'Director',
      description:
        'Vincent Van Gogh’s most popular painting, The Starry Night.',
      image: './assets/team-members/anindya.jpg',
      socialLinks: [
        {
          href: 'https://facebook.com/oliver',
          iconPath:
            'M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2V2C24,0.895,23.105,0,22,0z',
        },
        // Add more social links if needed
      ],
    },
    {
      id: 2,
      name: 'Anjana Bala Biswas',
      role: 'Founder',
      description:
        'Amet I love liquorice jujubes pudding croissant I love pudding.',
      image: './assets/team-members/anjana.jpg',
      socialLinks: [
        {
          href: 'https://facebook.com/marta',
          iconPath:
            'M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2V2C24,0.895,23.105,0,22,0z',
        },
      ],
    },
    {
      id: 3,
      name: 'Arghya Biswas ',
      role: 'Director.',
      description:
        'Apple pie macaroon toffee jujubes pie tart cookie caramels.',
      image: './assets/team-members/arghya.jpg',
      socialLinks: [
        {
          href: 'https://facebook.com/anthony',
          iconPath:
            'M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2V2C24,0.895,23.105,0,22,0z',
        },
      ],
    },
    {
      id: 4,
      name: 'Chandan mondal',
      role: 'Director',
      description:
        'Lorizzle ipsum bling bling sit amizzle, consectetuer adipiscing elit.',
      image: './assets/team-members/chandan.jpg',
      socialLinks: [
        {
          href: 'https://facebook.com/alice',
          iconPath:
            'M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2V2C24,0.895,23.105,0,22,0z',
        },
      ],
    },
    {
      id: 5,
      name: 'Jayanto mondal',
      role: 'Finance director',
      description:
        'Lorizzle ipsum bling bling sit amizzle, consectetuer adipiscing elit.',
      image: './assets/team-members/jayanto.jpg',
      socialLinks: [
        {
          href: 'https://facebook.com/alice',
          iconPath:
            'M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2V2C24,0.895,23.105,0,22,0z',
        },
      ],
    },
    {
      id: 6,
      name: 'Kalipada biswas',
      role: 'Chairman, Anjana Welfare Foundation',
      description:
        'Lorizzle ipsum bling bling sit amizzle, consectetuer adipiscing elit.',
      image: './assets/team-members/kalipada.jpg',
      socialLinks: [
        {
          href: 'https://facebook.com/alice',
          iconPath:
            'M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2V2C24,0.895,23.105,0,22,0z',
        },
      ],
    },
    {
      id: 7,
      name: 'Nilotpal mondal',
      role: 'Executive Derector',
      description:
        'Lorizzle ipsum bling bling sit amizzle, consectetuer adipiscing elit.',
      image: './assets/team-members/nilotpal.jpg',
      socialLinks: [
        {
          href: 'https://facebook.com/alice',
          iconPath:
            'M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2V2C24,0.895,23.105,0,22,0z',
        },
      ],
    },
    {
      id: 8,
      name: 'Nitai Mondal',
      role: ' Vice Chairman',
      description:
        'Lorizzle ipsum bling bling sit amizzle, consectetuer adipiscing elit.',
      image: './assets/team-members/nitai.jpg',
      socialLinks: [
        {
          href: 'https://facebook.com/alice',
          iconPath:
            'M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2V2C24,0.895,23.105,0,22,0z',
        },
      ],
    },
    {
      id: 9,
      name: 'Sankar Sarkar, ',
      role: ' Director',
      description:
        'Lorizzle ipsum bling bling sit amizzle, consectetuer adipiscing elit.',
      image: './assets/team-members/sankar.jpg',
      socialLinks: [
        {
          href: 'https://facebook.com/alice',
          iconPath:
            'M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2V2C24,0.895,23.105,0,22,0z',
        },
      ],
    },
    {
      id: 10,
      name: 'Subrata mondal',
      role: ' Director',
      description:
        'Lorizzle ipsum bling bling sit amizzle, consectetuer adipiscing elit.',
      image: './assets/team-members/subrata.jpg',
      socialLinks: [
        {
          href: 'https://facebook.com/alice',
          iconPath:
            'M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2V2C24,0.895,23.105,0,22,0z',
        },
      ],
    },
    // Add more team members as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
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
          slidesToShow: 1, // Adjusted for better mobile view
        },
      },
    ],
  };

  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
        <div>
          <p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400'>
            Core Team
          </p>
        </div>
        <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-green-600 sm:text-4xl md:mx-auto'>
          <span className='relative inline-block'>
            <svg
              viewBox='0 0 52 24'
              fill='currentColor'
              className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
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
            <span className='relative'>Welcome</span>
          </span>{' '}
          our talented team of professionals
        </h2>

        <p className='text-base text-gray-700 md:text-lg'>
          Meet the passionate individuals behind Charity. Our team of experts is
          driven by a shared mission to empower communities, promote
          sustainability, and advocate for those who need it most.
        </p>
      </div>
      <div className='slider-container white-slider-bg'>
        <Slider {...settings}>
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default TeamMembers;

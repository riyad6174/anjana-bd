import Link from 'next/link';
import { useState } from 'react';

const Page = () => {
  const [activeTab, setActiveTab] = useState('app');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Your teamMembers array
  const teamMembers = [
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

  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
        <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-green-600 sm:text-4xl md:mx-auto'>
          <span className='relative inline-block'>
            <span className='relative'>Meet</span>
          </span>{' '}
          our talented team of professionals
        </h2>
      </div>

      <div className='grid gap-10 sm:grid-cols-2 lg:grid-cols-4'>
        {teamMembers.map((member) => (
          <div key={member.id}>
            <div className='relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl'>
              <img
                className='object-cover w-full h-56 md:h-64 xl:h-80'
                src={member.image}
                alt={member.name}
              />
              <div className='absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75'>
                <p className='text-sm font-medium tracking-wide text-white'>
                  {member.name}
                </p>
              </div>
            </div>
            <div className='flex flex-col mt-2 justify-center items-center'>
              <p className='text-lg font-bold'>{member.role}</p>
              {/* <p className='mb-4 text-xs text-gray-800'>{member.description}</p> */}
              {/* <div className='flex items-center space-x-3'>
                {member.socialLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className='text-gray-600 transition-colors duration-300 hover:text-green-600'
                  >
                    <svg
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      className='h-5'
                    >
                      <path d={link.iconPath} />
                    </svg>
                  </Link>
                ))}
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;

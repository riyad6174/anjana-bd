import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Projects({ projects }) {
  console.log(projects);
  return (
    <>
      <div className=' bg-green-50 py-10'>
        <div className='max-w-5xl mx-auto text-left '>
          <p className='text-green-600 text-xl uppercase font-semibold mb-4 text-center '>
            Our Projects
          </p>
          <div className='flex justify-end md:justify-end'>
            <h2 className='hidden md:visible text-black text-xl lg:text-md font-semibold mb-8'>
              Explore Projects
            </h2>
          </div>
        </div>
        <div className='container px-0 md:px-10'>
          <div className='p-2 pt-10    lg:px-24 grid grid-cols-2 gap-y-2 gap-x-2 md:grid-cols-3 items-center justify-center'>
            {projects.slice(0, 3)?.map((project) => {
              return (
                <div
                  key={project?._id}
                  className='flex-shrink-0 h-full   relative overflow-hidden bg-green-600 rounded-lg max-w-xs shadow-lg group'
                >
                  <svg
                    className='absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform'
                    viewBox='0 0 375 283'
                    fill='none'
                    style={{ opacity: '0.1' }}
                  >
                    <rect
                      x='159.52'
                      y='175'
                      width='152'
                      height='152'
                      rx='8'
                      transform='rotate(-45 159.52 175)'
                      fill='white'
                    />
                    <rect
                      y='107.48'
                      width='152'
                      height='152'
                      rx='8'
                      transform='rotate(-45 0 107.48)'
                      fill='white'
                    />
                  </svg>
                  <div className='relative   flex items-center justify-center group-hover:scale-110 transition-transform'>
                    <div
                      className='block absolute w-68 h-48  bottom-0 left-0 -mb-24 ml-3'
                      style={{
                        background: 'radial-gradient(black, transparent 60%)',
                        transform:
                          'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)',
                        opacity: '0.2',
                      }}
                    ></div>
                    <Image
                      className='relative w-full h-44 md:h-72 object-cover'
                      src={`http://localhost:5000/img/${project?.image}`}
                      height={400}
                      width={400}
                      alt='project image'
                    />
                  </div>
                  <div className='relative text-white px-2 md:px-6 pb-6 mt-6'>
                    <div className='flex flex-col items-center space-y-4'>
                      <span className='block font-normal md:font-semibold text-sm md:text-lg'>
                        {project?.title}
                      </span>
                      <span>
                        <Link
                          href={`/project/${project?._id}`}
                          className='text-center z-20 bg-white rounded-full text-orange-500 text-xs font-bold px-4 py-2 leading-none  items-center'
                        >
                          Donate
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className='flex items-center justify-center pt-6'>
          <Link
            href='/projects'
            className='text-sm py-1  md:txt-sm bg-white border hover:bg-green-100 transition-all border-green-600 cursor-pointer px-4 mx-4 md:mx-0 uppercase text-green-600  mb-8'
          >
            See More Projects
          </Link>
        </div>
      </div>
    </>
  );
}

export default Projects;

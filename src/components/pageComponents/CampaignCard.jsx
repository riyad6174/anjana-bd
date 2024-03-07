import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function CampaignCard({ project }) {
  console.log(project, 'props');
  return (
    <div>
      <div class='flex flex-col justify-center py-4 '>
        <div class='relative border border-green-600 flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg px-3 max-w-xs md:max-w-4xl mx-auto '>
          <div class='w-full md:w-1/3 rounded-lg  overflow-hidden  bg-white grid place-items-center'>
            <Image
              src={`http://localhost:5000/img/${project?.image}`}
              height={300}
              width={300}
              alt='tailwind logo'
              className='w-96 h-32 md:h-48 object-cover py-2'
            />
          </div>
          <div class='w-full md:w-2/3 mb-4 bg-white  flex flex-col justify-between space-y-2 p-3'>
            <div>
              <Link href={`/campaign/${project?._id}`}>
                <p class=' text-gray-800 md:text-xl text-sm '>
                  {project?.title}
                </p>
              </Link>
              <p class=' text-gray-500 text-xs md:text-base pt-6 line-clamp-2 md:line-clamp-3'>
                {/* {project?.description?.slice(0, 86)} */}
                {project?.description}
                <Link
                  className='text-violet-500'
                  href={`/campaign/${project?._id}`}
                >
                  ...Read More
                </Link>
              </p>
            </div>

            <Link
              href={`/campaign/${project?._id}`}
              className=' text-center w-24 py-1  rounded-sm  font-thin bg-green-600 text-white'
            >
              Donate
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CampaignCard;

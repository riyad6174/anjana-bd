import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ProjectCard from '@/components/pageComponents/ProjectCard';
import React from 'react';

function Page() {
  return (
    <div>
      <div>
        <span className='flex justify-center uppercase text-xl text-green-600 font-semibold'>
          Our Campaign
        </span>
        <div className='container grid grid-cols-2 gap-6'>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
}

export default Page;

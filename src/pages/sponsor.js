import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SponsorCard from '@/components/pageComponents/SponsorCard';
import React from 'react';

function Page() {
  return (
    <div>
      <div className='grid grid-cols-4 gap-2 container py-10'>
        <SponsorCard />
        <SponsorCard />
        <SponsorCard />
        <SponsorCard />
        <SponsorCard />
        <SponsorCard />
        <SponsorCard />
        <SponsorCard />
      </div>
    </div>
  );
}

export default Page;

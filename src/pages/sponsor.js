import SponsorCard from '@/components/pageComponents/SponsorCard';
import { baseURL } from '@/utils/network';
import { MdClose, MdFilterList } from 'react-icons/md';
import React, { useState } from 'react';

function Page({ sponsors }) {
  const [filter, setFilter] = useState('');

  const filteredSponsors = filter
    ? sponsors.filter((sponsor) => sponsor.type === filter)
    : sponsors;
  return (
    <div className='container pt-12 '>
      <div className='flex justify-start lg:px-6 items-center space-x-2'>
        <span className='relative text-green-500 '>
          <select
            onChange={(e) => setFilter(e.target.value)}
            className='pl-10 bg-green-100 border  border-green-500  px-4 pr-2  py-1'
          >
            <option disabled selected value=''>
              Filter
            </option>
            <option value=''>All</option>
            <option value='child'>Child</option>
            <option value='old'>Old Age</option>
            <option value='women'>Women</option>
          </select>
          <MdFilterList className='text-2xl text-green-500 absolute left-2 top-1' />
        </span>

        {/* <span className='flex  items-center space-x-3 border border-green-500 text-green-500 bg-green-100 px-4'>
          <span className='text-md uppercase'>Filter</span>
        </span> */}
      </div>
      <div className='grid grid-cols-4 gap-2  py-6'>
        {filteredSponsors?.map((sp) => {
          return <SponsorCard key={sp._id} sponsorData={sp} />;
        })}
      </div>
    </div>
  );
}

export default Page;

export async function getServerSideProps() {
  try {
    const res = await fetch(`${baseURL}/sponsor`);
    if (!res.ok) {
      throw new Error(`Failed to fetch data. Status: ${res.status}`);
    }

    const sponsors = await res.json();

    return {
      props: {
        sponsors,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return {
      props: {
        sponsors: [],
      },
    };
  }
}

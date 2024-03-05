import CampaignCard from '@/components/pageComponents/CampaignCard';
import ProjectCard from '@/components/pageComponents/ProjectCard';
import React from 'react';

function Page({ campaign }) {
  console.log(campaign);
  return (
    <div>
      <div>
        <span className='flex justify-center uppercase text-xl text-green-600 font-semibold'>
          Our campaigns
        </span>
        <div className='container grid grid-cols-2 gap-6'>
          {campaign?.map((campaign) => {
            return <CampaignCard key={campaign._id} project={campaign} />;
          })}
          {/* <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard /> */}
        </div>
      </div>
    </div>
  );
}

export default Page;

export async function getServerSideProps() {
  try {
    const res = await fetch('http://localhost:5000/api/frontend/campaigns');
    if (!res.ok) {
      throw new Error(`Failed to fetch data. Status: ${res.status}`);
    }

    const campaign = await res.json();

    return {
      props: {
        campaign,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return {
      props: {
        campaign: [],
      },
    };
  }
}

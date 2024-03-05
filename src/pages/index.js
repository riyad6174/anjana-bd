import Image from 'next/image';
import { Inter } from 'next/font/google';
import Home from '@/components/pageComponents/Home';

const inter = Inter({ subsets: ['latin'] });

export default function Index({ projects, campaigns }) {
  return (
    <>
      <Home projects={projects} campaigns={campaigns} />
    </>
  );
}

export async function getServerSideProps() {
  try {
    // Make multiple API requests using Promise.all
    const [projectsRes, campaignRes] = await Promise.all([
      fetch('http://localhost:5000/api/frontend/projects'),
      fetch('http://localhost:5000/api/frontend/campaigns'),
      // Add more API endpoints as needed
    ]);

    if (!projectsRes.ok) {
      throw new Error(
        `Failed to fetch projects. Status: ${projectsRes.status}`
      );
    }

    if (!campaignRes.ok) {
      throw new Error(
        `Failed to fetch other data. Status: ${campaignRes.status}`
      );
    }

    // Parse the responses
    const projects = await projectsRes.json();
    const campaigns = await campaignRes.json();

    console.log(projects, campaigns);

    return {
      props: {
        projects,
        campaigns,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return {
      props: {
        projects: [],
        campaigns: [],
      },
    };
  }
}

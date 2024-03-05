import React from 'react';

import Hero from '../Hero';
import About from '../About';
import Campaign from '../Campaign';
import CTA from '../CTA';
import Projects from '../Projects';
import JoinUs from '../JoinUs';
import Mission from '../Mission';

function Home({ projects, campaigns }) {
  return (
    <>
      <Hero />
      <Mission />
      <Campaign campaigns={campaigns} />
      <JoinUs />
      <Projects projects={projects} />

      <About />

      <CTA />
    </>
  );
}

export default Home;

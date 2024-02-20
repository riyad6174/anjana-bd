import React from 'react';
import Contact from '../Contact';
import Navbar from '../Navbar';
import Hero from '../Hero';
import About from '../About';
import Campaign from '../Campaign';
import Articles from '../Articles';
import Newsletter from '../Newsletter';
import Testimonials from '../Testimonials';
import CTA from '../CTA';
import FAQ from '../FAQ';
import Footer from '../Footer';
import Copyright from '../Copyright';
import Projects from '../Projects';
import JoinUs from '../JoinUs';
import Mission from '../Mission';
import Initiatives from '../Initiatives';

function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <Campaign />
      <JoinUs />
      <Projects />
      {/* <Initiatives /> */}
      {/* <Articles /> */}
      {/* <Newsletter /> */}
      {/* <Testimonials /> */}
      <About />

      <CTA />
      {/* <FAQ /> */}
    </>
  );
}

export default Home;

import React from 'react';
import Banner from './banner/Banner';
import About from './about/About';
import Services from './services/Services';
import Work from './work/Work';

const Home = () => {
  return (
    <div> 
      <Banner />
      <About />
      <Services />
      <Work />
    </div>
  );
};

export default Home;

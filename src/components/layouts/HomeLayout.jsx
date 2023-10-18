import Header from 'components/common/Header';
import Home from 'components/screens/home/Home';
import Nav from 'components/common/Nav';
import React from 'react';
import Contact from 'components/common/Contact';

const Layout = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Nav />
      <Home />
      <Contact />
    </div>
  );
};

export default Layout;

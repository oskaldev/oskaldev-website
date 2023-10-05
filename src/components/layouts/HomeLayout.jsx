import Header from 'components/common/Header';
import Home from 'components/screens/home/Home';
import Nav from 'components/common/Nav';
import React from 'react';

const Layout = () => {
  return (
    <>
      <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
        <Header />
        <Nav />
        <Home />
        <div className='h-[4000px]'></div>
      </div>
    </>
  );
};

export default Layout;

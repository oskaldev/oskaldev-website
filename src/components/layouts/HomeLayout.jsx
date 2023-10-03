import Header from 'components/common/Header';
import Home from 'components/screens/home/Home';
import React from 'react';

const Layout = () => {
  return (
    <>
      <div className='py-10 bg-zinc-900 h-full'>
        <main>
          <Header />
          <Home />
        </main>
      </div>
    </>
  );
};

export default Layout;

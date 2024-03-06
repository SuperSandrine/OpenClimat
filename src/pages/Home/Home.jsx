import React from 'react';
import RootLayout from '../../layout/RootLayout';
import EcosystemeSection from './EcosystemeSection/EcosystemeSection';
import HeaderSection from './HeaderSection/HeaderSection';

/*
todo: DRY
todo: aria
*/

const Home = () => {
  return (
    <RootLayout>
      <HeaderSection />
      <EcosystemeSection/>
    </RootLayout>
  );
};

export default Home;

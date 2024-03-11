import React from 'react';
import RootLayout from '../../layout/RootLayout';
import HeaderSection from './HeaderSection/HeaderSection';
import CLIENTS from '../../data/clients';
import EcosystemeSection from './EcosystemeSection/EcosytemeSection';

/*
todo: DRY
todo: aria
todo: responsive
*/

const Home = () => {
  return (
    <RootLayout>
      <HeaderSection />
      <EcosystemeSection data={CLIENTS} />
    </RootLayout>
  );
};

export default Home;

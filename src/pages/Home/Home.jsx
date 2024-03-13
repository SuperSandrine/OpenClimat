import React from 'react';
import RootLayout from '../../layout/RootLayout';
import HeaderSection from './HeaderSection/HeaderSection';
import CLIENTS from '../../data/clients';
import EcosystemeSection from './EcosystemeSection/EcosytemeSection';
import HeaderSectionSecond from './HeaderSection/HeaderSectionSecond';
import HeaderSectionThird from './HeaderSection/HeaderSectionThird';

/*
todo: DRY
todo: refactor: smaller elements
todo: aria
todo: responsive
*/

const Home = () => {
  return (
    <RootLayout>
      <HeaderSectionThird />
      {/* <HeaderSectionSecond />
      <HeaderSection /> */}
      

      <EcosystemeSection data={CLIENTS} />
    </RootLayout>
  );
};

export default Home;

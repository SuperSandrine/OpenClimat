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
  const getColorFromHeaderSection = () =>{
    // const headerSection = document.querySelector('#headerSection');
    // console.log(typeof(headerSection));
    // const backgroundColor = window.getComputedStyle(headerSection, null).backgroundImage;

    // console.log(backgroundColor);
    // const col = headerSection.getAttribute
    // headerSection
    return '#efd4bf'
  }
  const getColorFromEcosystemeSection = () => {
    return 'transparent'
  }

  return (
    <RootLayout>
      <HeaderSectionThird />
      <div
      className="h-[150px] w-full"
      style={{
        background: `linear-gradient(to bottom, ${getColorFromHeaderSection()}, ${getColorFromEcosystemeSection()})`,
      }}
    ></div>
      
      <EcosystemeSection data={CLIENTS} />
    </RootLayout>
  );
};

export default Home;

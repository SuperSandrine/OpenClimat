import React from 'react';
import RootLayout from '../../layout/RootLayout';
import imageSVG from '../../assets/OC_SCREEN_DESKTOP_ANIM1-01 1.svg'
import EcosystemeSection from './EcosystemeSection/EcosystemeSection';

const Home = () => {
  return (
    <RootLayout>
      <div className="flex justify-evenly bg-gradient-to-b from-bg-dark-blue via-bg-middle-blue to-bg-light-pink h-screen pt-[15.9375rem]">
        <h2 className="text-5xl text-white w-[23.4375rem]">Rejoignez la plateforme ouverte de l’action climatique</h2>
        <img src={imageSVG} className=" w-[32.94rem] object-top object-contain" />
      </div>
      <EcosystemeSection/>
    </RootLayout>
  );
};

export default Home;

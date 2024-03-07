import React from 'react';
import { useEffect } from 'react';
import logoSVG from '../../assets/LOGO OC (1).svg';
import flagFR from '../../assets/DRAPEAU FR.svg'
import { Link } from 'react-router-dom';
import LinkMenu from '../../components/LinkMenu/LinkMenu';
import DropDown from '../../components/Dropdown/DropDown';

/*
todo : - dropdown
todo : élargir la height des boutons
*/

const Menu = () => {
  const JoinOptions=['Je suis une entreprise','Je suis un média','Je suis une ONG']
  const RessourcesOptions=['Base de données','Simulateur SBTi','Méthodologie','Application Nota Climat']



  const handleScroll = () => {
    const sectionEcosysteme = document.getElementById("sectionEcosysteme");
    const menu = document.getElementById("menu");

    if (sectionEcosysteme && menu) {
      const rect = sectionEcosysteme.getBoundingClientRect();
      const isVisible = rect.top <= 250 

      if (isVisible) {
        menu.style.backgroundColor = '#031356';
      } else if (!isVisible){
        menu.style.backgroundColor = 'transparent'

      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return <div className=" fixed top-0 mx-auto container  backdrop-blur-md px-[2rem] text-white text-[15px] z-40 transition-all ease-in-out duration-[1s]" id="menu">
    <div className='flex justify-between 
      py-[2rem]  border-b border-white/40 container-xl'>

{/* <div className='flex justify-between w-[calc(100vw-4rem)] 
    xl:w-[1280px-4rem] 2xl:xl:w-[1280px-4rem] py-[2rem]  border-b border-white/40'> */}

    <div className="flex items-center">
      <h1 aria-label='OpenClimat'><img src={logoSVG} className="pr-[2.125rem]" alt='logo OpenClimat'/> </h1>
      <DropDown buttonName="Rejoindre l'écosystème" elements={JoinOptions}></DropDown>
      <LinkMenu>Media</LinkMenu>
      <DropDown buttonName="Ressources" elements={RessourcesOptions}></DropDown>
    </div>
    
    <div className="flex  items-center">
      <LinkMenu>Contact</LinkMenu>
      <LinkMenu>Connexion</LinkMenu>
      <Link to="/" className="pl-[2.5rem]" ><img src={flagFR} /> </Link>
    </div>
    </div>
  </div>;
};

export default Menu;

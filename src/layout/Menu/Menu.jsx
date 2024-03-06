import React from 'react';
import logoSVG from '../../assets/LOGO OC (1).svg';
import flagFR from '../../assets/DRAPEAU FR.svg'
import { Link } from 'react-router-dom';
import LinkMenu from '../../components/LinkMenu/LinkMenu';
import DropDown from '../../components/Dropdown/DropDown';

const Menu = () => {
  return <div className="flex fixed top-0 w-[calc(100vw-4rem)] backdrop-filter backdrop-blur-lg py-[2rem] mx-[2rem] justify-between text-white text-[15px] border-b border-white/40">

    <div className="flex items-center">
      <img src={logoSVG} className="pr-[2.125rem]"/> 
      <DropDown buttonName="Rejoindre l'écosystème"></DropDown>
      <LinkMenu>Media</LinkMenu>
      <LinkMenu>Ressources</LinkMenu>
    </div>
    
    <div className="flex  items-center">
      <LinkMenu>Contact</LinkMenu>
      <LinkMenu>Connexion</LinkMenu>
      <Link to="/" className="pl-[2.5rem]" ><img src={flagFR} /> </Link>
    </div>
  </div>;
};

export default Menu;

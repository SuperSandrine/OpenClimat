import React from 'react';
import logoSVG from '../../assets/LOGO OC (1).svg';
import flagFR from '../../assets/DRAPEAU FR.svg'
import { Link } from 'react-router-dom';

const Menu = () => {
  return <div class="flex fixed top-0 w-[calc(100vw-4rem)] backdrop-filter backdrop-blur-lg py-[2rem] mx-[2rem] justify-between text-white text-[15px] border-b border-white/40">

    <div class="flex items-center">
      <img src={logoSVG}/> 
      <Link class="relative px-[2.125rem]">
      Rejoindre l'écosystème
      <div class="absolute border-b border-white top-[calc(2rem+26px)]  left-[2.125rem] w-[calc(100%-4.25rem)]" >
      </div>
      </Link>
      <Link to="/" class="relative px-[2.125rem] " >Media</Link>
      <Link to="/" class="relative px-[2.125rem] " >Ressources</Link>
    </div>
    
    <div class="flex  items-center">
      <Link to="/" >Contact</Link>
      <Link to="/" class="pl-[2.5rem]" >Connexion</Link>
      <Link to="/" class="pl-[2.5rem]" ><img src={flagFR} /> </Link>
    </div>
    </div>;
};

export default Menu;

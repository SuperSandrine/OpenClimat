import React from 'react'
import imageSVG from '../../../assets/OC_SCREEN_DESKTOP_ANIM1-01 1.svg'
import arrow from '../../../assets/Vector.svg'

/*
todo : animer le texte
todo : animer le dessin
todo : change width in pourcentage according screen width
todo : rajouter une écoute de texts (et agir quand ils existent)
*/

const HeaderSection = () => {
  const texts = document.querySelectorAll('.header-text')
  //console.log("texts", texts);

  window.onscroll=()=>{
    texts.forEach(txt=>{
      let top = window.scrollY; 
      let offset = txt.offsetTop-300 ;
      let height = txt.offsetHeight; //614

      //console.log("offset", top, txt.offsetTop, offset);

      //if (top >= offset && top < offset + height){

      if (top >= offset ){
        txt.classList.add('animate-glissade');
      }
      else{
        txt.classList.remove('animate-glissade')
      }
    })
  }

  return (
    <div className="flex justify-evenly bg-gradient-to-b from-bg-dark-blue via-bg-middle-blue to-bg-light-pink h-screen pt-[15.9375rem] ">
        <div className="flex-col w-[23.4375rem] relative animate-glissade">
          <section className='header-text h-[20vh] opacity-0' id="introFirst">
            <h2 className="text-5xl text-white animate-glissade" >Rejoignez<br/> la plateforme ouverte<br/> de l’action climatique</h2>
          </section>
          <section className='header-text h-[20vh] opacity-0'id="introSecond">
            <h2 className="text-5xl text-white" >Une page pédagogique, fiable et comparable pour communiquer et progresser avec tout votre écosystème.</h2>
          </section>
          <section className="header-text opacity-0 text-5xl text-white " id="introThird">
            <h2>N'agissez plus seul. Rejoignez le mouvement et réussissons ensemble le défi de notre siècle.</h2>
          <button>Rejoindre le mouvement <img src={arrow}/></button>
          </section>
        </div>
        <img src={imageSVG} className=" w-[32.94rem] object-top object-contain" />
      </div>
  )
}

export default HeaderSection
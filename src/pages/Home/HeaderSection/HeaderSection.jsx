import React from 'react'
import imageSVG from '../../../assets/OC_SCREEN_DESKTOP_ANIM1-01 1.svg'
import arrow from '../../../assets/Vector.svg'

/*
todo : animer le texte
todo : animer le dessin
todo : change width in pourcentage according screen width
*/

const HeaderSection = () => {

  return (
    <div className="flex justify-evenly bg-gradient-to-b from-bg-dark-blue via-bg-middle-blue to-bg-light-pink h-screen pt-[15.9375rem] ">
        <div className="flex-col w-[23.4375rem] relative">
        <h2 className="text-5xl text-white animate-glissade" id="introFirst">Rejoignez<br/> la plateforme ouverte<br/> de l’action climatique</h2>
        <h2 className="text-5xl text-white opacity-0" id="introSecond">Une page pédagogique, fiable et comparable pour communiquer et progresser avec tout votre écosystème.</h2>
        <div className="text-5xl text-white opacity-0" id="introThird">
        <h2>N'agissez plus seul. Rejoignez le mouvement et réussissons ensemble le défi de notre siècle.</h2>
        <button>Rejoindre le mouvement <img src={arrow}/></button>
        </div>
        </div>
        <img src={imageSVG} className=" w-[32.94rem] object-top object-contain" />
      </div>
  )
}

export default HeaderSection
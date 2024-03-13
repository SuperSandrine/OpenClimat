import React from 'react'
import imageSVG from '../../../assets/OC_SCREEN_DESKTOP_ANIM1-01 1.svg'
import arrow from '../../../assets/Vector.svg'
import ButtonCTA from '../../../components/Buttons/ButtonCTA'


const HeaderSectionSecond = () => {
  
  return (
    <div className="flex justify-evenly bg-gradient-to-b from-bg-dark-blue via-bg-middle-blue to-bg-light-pink h-screen">
      
        <div className="flex flex-col w-[23.4375rem] animated-text pt-[15rem]">

          <section className='line min-h-[31rem]' id="introFirst">
            <h2 className="text-5xl text-white " >
              Rejoignez<br/> la plateforme ouverte<br/> de l’action climatique</h2>
          </section>

          <section className='line min-h-[40rem]'id="introSecond">
            <h2 className="text-5xl text-white" >Une page pédagogique, fiable et comparable pour communiquer et progresser avec tout votre écosystème.</h2>
          </section>

          <section className="line mni-h-[31rem] text-5xl text-white " id="introThird">
            <h2 className='pb-[8rem]'>N'agissez plus seul. Rejoignez le mouvement et réussissons ensemble le défi de notre siècle.</h2>
            <ButtonCTA>Rejoindre le mouvement <img src={arrow}/></ButtonCTA>
          </section>

        </div>

        <div className='pt-[15rem]
          '>

          <img src={imageSVG} className=" w-[32.94rem] object-top object-contain" />
        </div>
      </div>



  )
}

export default HeaderSectionSecond
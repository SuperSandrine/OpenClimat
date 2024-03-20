import React from 'react'
import imageSVG from '../../../assets/OC_SCREEN_DESKTOP_ANIM1-01 1.svg'
import imageSVGBig from '../../../assets/ANIM2.svg'
import arrow from '../../../assets/Vector.svg'
import ButtonCTA from '../../../components/Buttons/ButtonCTA'


const HeaderSectionThird = () => {
  
  return (
    <div className="flex justify-evenly pt-[7rem] bg-gradient-to-b from-bg-dark-blue via-bg-middle-blue to-bg-light-pink h-screen overflow-hidden" id="headerSection">
      
        <div className="flex flex-col w-[23.4375rem] pt-[8rem] container-fadeOut">

          <section className=' min-h-[51rem]' id="introFirst3">
            <h2 className="text-5xl text-white " >
              Rejoignez<br/> la plateforme ouverte<br/> de l’action climatique</h2>
          </section>

          <section className=' min-h-[51rem] opacity-0'id="introSecond3">
            <h2 className="text-5xl text-white" >Une page pédagogique, fiable et comparable pour communiquer et progresser avec tout votre écosystème.</h2>
          </section>

          <section className=" min-h-[31rem] text-5xl text-white opacity-1" id="introThird3">
            <h2 className='pb-[8rem]'>N'agissez plus seul. Rejoignez le mouvement et réussissons ensemble le défi de notre siècle.</h2>
            <ButtonCTA>Rejoindre le mouvement <img src={arrow}/></ButtonCTA>
          </section>

        </div>

        <div className='pt-[8rem] container-fadeOut relative'>

          <img src={imageSVG} className=" w-[32.94rem] object-top object-contain" id="introImgFirst3" />

          <img src={imageSVGBig} className=" w-[32.94rem] opacity-0 absolute origin-left pl" id="introImgSecond3"
          />
        </div>


      </div>



  )
}

export default HeaderSectionThird
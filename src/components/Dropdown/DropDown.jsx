import React from 'react'
import arrow from '../../assets/Vector.svg'
import DropdownListEl from './DropdownListEl'

/*
todo : changer dynamiquement la valeur witdh minimum de li pour qu'elle corresponde à celle de son button
todo : applique un fond conditionnel à la dropdown
todo : gérer le masque pour l'animation translate
done : travailler l'animation d'apparition du block ul
done : faire tourner la flèche
*/

const DropDown = (props) => {
  const {buttonName, elements} = props
  return (
    <div className='dropdown relative inline-block '>
      <div className="group">

        <button className=' menu-link items-center flex gap-2 '>
            <p>{buttonName}</p>
            <img src={arrow} className='transform group-hover:-rotate-90 transition-all duration-300'/>
            <div className="menu-hover group-hover:scale-100 "></div>
        </button>

        <ul className=" absolute 
        bottom-[100px]
        left-[2.125rem] min-w-44 transform group-hover:translate-y-[calc(100%+100px)] transition-all duration-[1s] z-30" >
          {elements.map((el,index)=>(<DropdownListEl key={index}>{el}</DropdownListEl>))}
        </ul>
        {/* animation avec scale-y fonctionne mais l'efeft est différent */}
        {/* <ul className=" absolute left-[2.125rem] min-w-44 
        scale-y-0 transform 
        group-hover:scale-y-[100%] 
        origin-top transition duration-700">
          {elements.map((el,index)=>(<DropdownListEl key={index}>{el}</DropdownListEl>))}
        </ul> */}

      </div>
    </div> 
  )
}



export default DropDown
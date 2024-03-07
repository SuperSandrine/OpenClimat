import React from 'react'
import arrow from '../../assets/Vector.svg'
import DropdownListEl from './DropdownListEl'

/*
todo : changer dynamiquement la valeur witdh minimum de li pour qu'elle corresponde à celle de son button
todo : travailler l'animation d'apparition du block ul
todo : applique un fond conditionnel
*/

const DropDown = (props) => {
  const {buttonName, elements} = props
  return (
    <div className='dropdown relative inline-block '>
      <div className="group">

        <button className=' menu-link items-center flex gap-2 '>
            <p>{buttonName}</p>
            <img src={arrow} />
            <div className="menu-hover group-hover:block  group-hover:scale-100 "></div>
        </button>

        <ul className="hidden absolute group-hover:block
        top-[calc(4rem+22.5px)] 
        left-[2.125rem] min-w-44 " >
          {elements.map((el,index)=>(<DropdownListEl key={index}>{el}</DropdownListEl>))}
        </ul>

      </div>
    </div> 
  )
}



export default DropDown
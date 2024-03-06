import React from 'react'
import { Link } from 'react-router-dom'
import arrow from '../../assets/Vector.svg'



const DropDown = (props) => {
  const {buttonName} =props
  return (
    <div className='dropdown relative inline-block'>
      <div>
        <button className='flex gap-2 relative items-center hover:bg-red hover:border-b hover:border-white group'>
          <p>{buttonName}</p>
          <img src={arrow} />
        </button>
        <ul className='hidden group-hover:text-red '>
          <li>
            <Link to="#" className='group-hover:text-red'>A</Link>
            <Link to="#">B</Link>
            <Link to="#">C</Link>
          </li>
        </ul>
      </div>
     {/* <div className="flex relative px-[2.125rem] gap-2">
      <p>{buttonName}</p> <img src={arrow} />
        <div className="absolute border-b border-white top-[calc(2rem+26px)]  left-[2.125rem] w-[calc(100%-4.25rem)]" >
        </div> 
      </div>*/}
      </div> 
  )
}

export default DropDown
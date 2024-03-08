import React from 'react'
import Arrow from '../SmallElements/Arrow'

const Button = ({children}) => {
  return (
    <button className=" bg-dark-blue text-white flex items-center gap-2  rounded-[4px] pr-[1.25rem] pl-[1.3rem] py-[0.82rem] group">
      <p className="text-[15px] ">
      {children}
      </p>
      <Arrow fill="white"/>
    </button>
  )
}

export default Button
import React from 'react'
import Arrow from '../SmallElements/Arrow'

const ButtonCTA = ({children}) => {
  return (
    <button className="text-bg-dark-blue text-[1rem] rounded-[4px] bg-white flex items-center gap-2 pr-[1.5rem] pl-[2.5rem] py-[0.9rem] group ">
      {children}
      <Arrow fill="#080e3e"/>
    </button>
)
}

export default ButtonCTA
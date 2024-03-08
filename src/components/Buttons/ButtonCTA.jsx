import React from 'react'
import Arrow from '../SmallElements/Arrow'

const ButtonCTA = ({children}) => {
  return (
    <button className="text-bg-dark-blue bg-white flex items-center gap-2 pr-4 pl-5 py-2">
      {children}
      <Arrow fill="#080e3e"/>
    </button>
)
}

export default ButtonCTA
import React from 'react'
import { Link } from 'react-router-dom'

const LinkMenu = ({children}) => {
  return (
    <Link to="/" className="menu-link group" >{children}
      <div className='menu-hover group-hover:block group-hover:absolute'></div>
      </Link>
  )
}

export default LinkMenu
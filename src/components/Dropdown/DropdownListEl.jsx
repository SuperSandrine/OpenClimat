import React from 'react';
import { Link } from 'react-router-dom';

const DropdownListEl = ({children}) => {
  return (
    <li className="relative py-[1.125rem] min-w-44 text-white/40 border-b border-white/40 transition-all origin-left hover:text-white group/list ">
            <Link to="#" >{children}</Link>
            <div className="absolute border-b border-white top-[calc(2rem+26px)] w-full z-40 transition-all scale-0 duration-500 origin-left group-hover/list:scale-100"></div>
          </li>
  )
}

export default DropdownListEl
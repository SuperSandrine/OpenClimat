import React from 'react'

const Arrow = ({fill}) => {
  return (
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className='transform group-hover:-rotate-90 transition-all duration-300'>
      <path d="M6.4 0.19L6.39 5.81L0.58 0L0 0.58L5.8 6.38L0.19 6.4V7.16H7.17L7.18 0.17L6.4 0.19Z" fill={fill}/>
    </svg>
  )
}

export default Arrow
import React from 'react'

const MenuSection = (props) => {
  const {clients} = props
  return (
    <div id="ecosystemeSectionMenu">
      <div className='flex justify-center pt-[8vh] border-b border-dark-blue/40'> 
        {clients.map((el,index)=>{
          return(
          <button key={index}>
            <h3  className='min-w-72 pb-[1rem] relative group'>{el}
              <div className="absolute bottom-[-0.5px] border-b border-dark-blue w-full z-40 transform scale-0 group-hover:scale-100 transition-all duration-300 origin-left"></div>
            </h3>
          </button>
        )}
        )}
      </div>
    </div>
  )
}

export default MenuSection
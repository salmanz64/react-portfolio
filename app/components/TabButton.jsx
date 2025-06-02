import React from 'react'

const TabButton = ({active,selectTab,children}) => {
    const buttonClass = active ? "text-white border-b border-primary" : "text-[#ADB7BE]";

 
    return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClass}`}>{children}</p>
        
    </button>
  )
}

export default TabButton

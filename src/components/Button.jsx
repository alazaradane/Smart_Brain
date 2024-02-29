import React from 'react'

const Button = ({label, iconURL, iconAlt, backgroundColor, borderColor, textColor, fullwidth, signOut, onClick}) => {
 
  return (
    <button className={` flex justify-center items-center px-7 py-4 gap-2
       text-lg font-montserrat leading-none
      ${backgroundColor ? ` ${backgroundColor} ${borderColor} ${textColor}`: ' bg-coral-blue text-white border-coral-red'} rounded-full ${fullwidth && ' w-full'}, 
      ${signOut && ' bg-red-500 rounded-lg p-0 mr-5 hover:bg-red-400'}` }
      onClick={onClick}
      >
        {label}
        {iconURL && 
        <img 
            src={iconURL}
            alt={iconAlt}
            className='ml-2 rounded-full w-5 h-5 '/>}
    </button>
  )
}

export default Button
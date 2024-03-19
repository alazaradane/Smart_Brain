import React from 'react'

const ServicesCard = ({imgURL, label, subtext}) => {
  return (
    <div data-aos="zoom-out-down" data-aos-duration="1000" className=' flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16'>
        <div className=' flex justify-center items-center rounded-full w-20 h-20 bg-coral-red'>
            <img src={imgURL} alt={label} width={174} height={174} />
        </div>
        <h3 className=' mt-5 font-palanquin text-3xl leading-normal font-bold'>{label}</h3>
        <p className=' mt-3 break-words font-montserrat text-slate-gray leading-normal text-lg'>{subtext}</p>
    </div>
  )
}

export default ServicesCard
import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({imgURL, customerName, feedback, rating}) => {
  return (
    <div className=' flex justify-center items-center flex-col'>
        <img 
            src={imgURL} alt='customer image'
            className=' rounded-full object-cover w-[120px] h-[120px]' />
        <p className=' m-6 info-text text-center max-w-sm'>{feedback}</p>
        <div className=' flex justify-center items-center gap-2.5'>
            <img 
                src={star}
                alt="star"
                width={24}
                height={24}
                className=' object-contain m-0' />
            <p className=' text-xl font-montserrat text-slate-gray'>
                {rating}
            </p>
        </div>
        <h3 className=' mt-1 font-palanquin font-bold text-3xl text-center text-black'>{customerName}</h3>
    </div>
  )
}

export default ReviewCard
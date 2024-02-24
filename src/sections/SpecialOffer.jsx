import React from 'react'
import {tiger} from '../assets/images'
import Button from '../components/Button'
import {arrowRight} from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className=' flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='items-center justify-center flex w-1/2 '>
        <img src={tiger}  className=' w-[1500px] h-[650px] rounded-xl'/>
      </div>
      <div className=' flex flex-col  justify-start mt-12 max-sm:w-full w-1/2 '>
        <h1 className=' font-palanquin text-4xl font-bold mb-5'><span className=' text-coral-red'>Special</span> Offer</h1>
        <p className=' mb-6 font-montserrat text-slate-gray'>
          Unlock the power of AI for less! Discover our exclusive special offer on our cutting-edge AI SaaS system,
          featuring advanced technologies like face recognition, voice analysis, and more. Elevate your business 
          with state-of-the-art solutions at an unbeatable price. Limited time only –
          seize the opportunity to revolutionize your operations today!"
        </p>
        <p className=' font-montserrat text-slate-gray'>
          Experience seamless integration and powerful insights with our AI SaaS system, designed to 
          optimize your workflow and enhance decision-making.
        </p> 
        <div className=' mt-6 flex flex-wrap gap-4'>
         <Button label={'Get Started'} iconURL={arrowRight}/>
         <Button label='Learn more' backgroundColor='bg-white' borderColor='border-slate-gray' textColor='text-slate-gray'/>
        </div>     
          
      </div>
    </section>
  )
}

export default SpecialOffer
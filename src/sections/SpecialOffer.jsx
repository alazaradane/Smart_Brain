import React from 'react'
import {offer} from '../assets/images'
import Button from '../components/Button'
import {arrowRight} from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className=' flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className=' flex-1'>
        <img src={offer} width={773} height={687} className=' object-contain w-full'/>
      </div>
      <div className=' flex flex-col w-1/2 justify-start mt-12 max-sm:w-full'>
        <h1 className=' font-palanquin text-4xl font-bold mb-5'><span className=' text-coral-red'>Special</span> Offer</h1>
        <p className=' mb-6 font-montserrat text-slate-gray'>
        Welcome to our exclusive special offer section, where stepping into style and comfort is now more 
        affordable than ever! Explore our curated collection of footwear 
        delights, meticulously crafted to elevate your every stride.
        </p>
        <p className=' font-montserrat text-slate-gray'>
        Discover unbeatable discounts on your favorite brands, ensuring that your shoe 
        game remains on point without breaking the bank. But hurry, these deals won't last forever!
        </p> 
        <div className=' mt-6 flex flex-wrap gap-4'>
         <Button label={'Shop now'} iconURL={arrowRight}/>
         <Button label='Learn more' backgroundColor='bg-white' borderColor='border-slate-gray' textColor='text-slate-gray'/>
        </div>     
          
      </div>
    </section>
  )
}

export default SpecialOffer
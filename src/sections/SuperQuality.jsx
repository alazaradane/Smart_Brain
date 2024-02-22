import React from 'react'
import Button from '../components/Button'
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
    <section
      id='about-us' 
      className=' flex flex-1 flex-row max-sm:flex-col max-lg:flex-col w-full max-container'>
      <div className=' flex flex-col w-1/2 justify-start mt-12 max-sm:w-full max-md:justify-center max-md:items-center '>
        <h1 className=' font-palanquin text-4xl font-bold mb-5'>We Provide You <span className=' text-coral-red'>Super Quality</span> Shoes</h1>
        <p className=' mb-6 font-montserrat text-slate-gray'>
          We take pride in delivering nothing short of excellence when it comes to your footwear needs. 
          Our commitment to superior craftsmanship and premium materials ensures that each 
          step you take is met with uncompromising comfort and style. 
        </p>
        <p className=' font-montserrat text-slate-gray'>
          Experience the difference with our meticulously curated selection of shoes, 
          designed to elevate your footwear game to new heights. From the finest leather to advanced technology, 
          we spare no expense in providing you with shoes that not 
          only look exceptional but also feel extraordinary.
        </p> 
        <div className=' mt-6 flex'>
         <Button label={`Show details`}/>
        </div>     
          
      </div>
      <div className=' ml-16 max-sm: flex items-center justify-center mt-6'>
        <img src={shoe8} alt={shoe8} className=' object-contain' />
      </div>

    </section>
  )
}

export default SuperQuality
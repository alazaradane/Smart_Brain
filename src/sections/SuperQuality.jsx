import React from 'react'
import Button from '../components/Button'
import { superImage } from '../assets/images'

const SuperQuality = () => {
  return (
    <section
      id='about-us' 
      className=' flex flex-1 flex-row max-sm:flex-col max-lg:flex-col w-full max-container'>
      <div data-aos="zoom-in-up" data-aos-duration="1000" className=' flex flex-col w-1/2 justify-start mt-12 max-sm:w-full max-md:justify-center max-md:items-center '>
        <h1 className=' font-palanquin text-4xl font-bold mb-5'>We Provide You <span className=' text-coral-blue'>Super Quality</span> AI Services</h1>
        <p className=' mb-6 font-montserrat text-slate-gray'>
          In our SuperQuality section, we integrate cutting-edge AI technology to deliver unparalleled precision and efficiency. 
          Our solutions prioritize quality, offering businesses actionable insights and empowering them to stay ahead in today's competitive landscape. 
          With a focus on innovation and customer satisfaction, we set the standard for excellence in AI.
        </p>
        <p className=' font-montserrat text-slate-gray'>
          Harness the power of AI for unmatched precision and efficiency in our SuperQuality section. 
          Our solutions deliver actionable insights, empowering businesses to excel in a competitive world. Experience innovation and 
          excellence with our customer-focused approach to AI technology.
        </p> 
        <div className=' mt-6 flex'>
         <Button label={`Show details`}/>
        </div>     
          
      </div>
      <div data-aos="fade-down" data-aos-duration="1000"  className=' ml-16 max-sm: flex items-center justify-center mt-6'>
        <img src={superImage} alt={superImage} className=' object-contain rounded-xl' />
      </div>

    </section>
  )
}

export default SuperQuality
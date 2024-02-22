import React from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { shoes, statistics } from '../constants'
import { bigShoe1, bigShoe2, bigShoe3 } from '../assets/images'
import ShoeCard from '../components/ShoeCard'
import { useState } from 'react'

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe2)
  return (
    <section
    id='home'
    className='w-full border-2 py-2 pl-8 pr-2 gap-10 max-container flex flex-col  xl:flex-row  justify-center min-h-screen '
    >
      <div className='relative flex w-2/5 flex-col justify-center items-start  max-xl:padding-x  pt-28 max-sm:w-full max-lg:w-full max-xl:w-full'>
        <p className=' text-xl font-montserrat text-coral-red ml-6'>Our Summer collection </p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className=' xl:bg-white xl:whitespace-nowrap relative z-10 pr-10  '>The New Arrival</span>
          <br />
          <span className=' inline-block text-coral-red mt-3'>Nike</span> shoes
        </h1>
        <p className=' font-montserrat text-slate-gray text-lg leading-8 mb-14 mt-6 sm:max-w-sm'>Discover stylish nike arrivals, quality comfort and innovation for your acitve life. </p>
        <Button label="Show Now" iconURL={arrowRight} iconAlt={'Right Arrow Icon'}/>

        <div  className=' flex justify-start items-start gap-16 mt-20 flex-wrap w-full '>
          {statistics.map((stat)=>
          <div key={stat.label}>
            <p className=' text-4xl font-palanquin font-bold'>{stat.value}</p>
            <p className=' font-montserrat text-slate-gray leading-7'>{stat.label}</p>
          </div>)}
        </div>
      </div>

      <div className='relative w-full flex justify-center items-center  xl:min-h-screen max-xl:bg-primary py-40 bg-hero bg-cover bg-center '>
        <img 
          src={bigShoeImg}
          alt='shoe collection'
          width={500}
          height={500}
          className=' object-contain z-10 relative'
          />

          <div
            className=' flex   sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'
          >
            {shoes.map((shoe)=>
            <div key={shoe}>
              <ShoeCard
                imgURL={shoe}
                ChangeBigShoeImage={(shoe)=>setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}/>
            </div>)}
          </div>
      </div>


    </section>
  )
}

export default Hero;
import React from 'react'
import {products} from '../constants/index'
import PopularProductCard from '../components/PopularProductCard'

const PopularProduct = () => {
  return (
    <section 
      id='products'
      className=' max-container max-sm:mt-12'>
        <div data-aos="zoom-in" data-aos-duration="1000" className=' flex flex-col justify-start gap-5'>
          <h2 className=' text-4xl font-bold font-palanquin'>Our <span className=' text-coral-blue'>Popular</span> Services</h2>
          <p className=' lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
            Empower your business with AI-driven insights and innovation from our industry-leading platform.
          </p>
        </div>
        <div data-aos="fade-up"
              data-aos-duration="1000" className=' mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14'>
          {products.map((product)=>
            <PopularProductCard key={product.name} {...product}/>
          )}
        </div>
      </section>
  )
}

export default PopularProduct;
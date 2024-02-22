import React from 'react'
import Button from '../components/Button'

const Subscribe = () => {
  return (
    <section
      id='contact-us'
      className=' max-container flex justify-between items-center flex-col gap-10'>
          <h3 className=' text-4xl leading-[68px]  font-palanquin font-bold'>Sign Up For <span className=' text-coral-red'>Updates</span> & Newsletter</h3>
          <div className=' max-lg:w-1/2 max-sm:w-full w-[80%] flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full max-md:w-[30rem]'>
            <input type="text" className=' input' placeholder='Subscribe@Nike.com'/>
            <div className=' flex max-sm:justify-end items-center max-sm:w-[30%]'>
              <Button label={'Sign Up'} fullwidth/>
            </div>
          </div>
    </section>
  )
}

export default Subscribe
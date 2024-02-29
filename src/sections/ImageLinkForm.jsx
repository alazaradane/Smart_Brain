import React from 'react'
import Button from '../components/Button'

const ImageLinkForm = ({onInputChange}) => {
  return (
    <section
      id='contact-us'
      className=' max-container flex justify-between items-center flex-col gap-10'>
          <h3 className=' text-2xl leading-[68px]  font-palanquin font-bold text-white-400'>{'This Magic Brain will detect face in your picture. Get it try'}</h3>
          <div className=' max-lg:w-1/2 max-sm:w-full w-[80%] flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full max-md:w-[30rem]'>
            <input type="text" className=' input bg-black border-2 xl:focus:border-coral-blue' placeholder='Enter Image URL...' onChange={onInputChange}/>
            <div className=' flex max-sm:justify-end items-center max-sm:w-[30%]'>
              <Button label={'Detect'} />
            </div>
          </div>
    </section>
  )
}

export default ImageLinkForm
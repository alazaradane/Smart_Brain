import React from 'react'
import { HeadSet } from '../assets/images'
import SignForm from '../components/SignForm'

const SignIn = () => {
  return (
    <section
        id='#signin'
        className=' flex  bg-black text-white max-sm:flex-col-reverse max-md:flex-col-reverse'
    >
        <div>
          <img src={HeadSet} alt="HeadSET" height=' h-screen' className=' max-sm:hidden max-md:hidden ' />  
        </div>
        <div className=' flex   mx-auto h-screen'>
            <SignForm email password/>
        </div>
    </section>
  )
}

export default SignIn
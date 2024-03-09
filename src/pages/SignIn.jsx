import React from 'react'
import { HeadSet } from '../assets/images'
import SignForm from '../components/SignForm'

const SignIn = () => {
  return (
    <section
        id='#signin'
        className=' flex  bg-black text-white'
    >
        <div>
          <img src={HeadSet} alt="HeadSET" height=' h-screen' />  
        </div>
        <div className=' flex   mx-auto '>
            <SignForm email password/>
        </div>
    </section>
  )
}

export default SignIn
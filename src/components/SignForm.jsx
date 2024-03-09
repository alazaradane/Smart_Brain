import React from 'react'
import Button from './Button'
import { headerLogo } from '../assets/images'

const SignForm = ({email, password,onRouteChange}) => {
  return (
    <div className=' flex flex-col items-center '>
        {email && password ? 
            <div>
                <div className=' flex flex-col justify-center items-center '>
                    <img src={headerLogo} width={150} height={150}/>
                    <h3 className=' text-3xl font-palanquin font-bold text-center'>Sign In</h3>
                </div>
                <div className=' my-6'>
                    <p className=' text-xl font-montserrat my-3 '>Email</p>
                    <input type="email" placeholder='Email' className=' p-3 bg-black border border-3 border-coral-blue placeholder:text-white-400 outline-none' />
                </div>
                <div>
                    <p className=' text-xl font-montserrat my-3 '>Password</p>
                    <input type="password" placeholder='Password' className=' p-3 bg-black border border-3 border-coral-blue placeholder:text-white-400 outline-none' />
                </div>
                <div className=' mt-3 flex flex-col'>
                    <Button label={'Sign In'} signup onClick={onRouteChange}/>
                    <a href="signup" className=' mt-3 text-center hover:text-coral-blue'>Create Account</a>
                </div>
            </div>:"NO Email"  
        }
    </div>
  )
}

export default SignForm
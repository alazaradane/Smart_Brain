import React from 'react'


import {headerLogo} from '../assets/images/'
import { navLinks } from '../constants'

const Nav = () => {
  return (
    <header data-aos="fade-down" data-aos-duration="1000" className='padding-x py-8 w-full z-10 absolute'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img src={headerLogo} 
               alt="header-logo" 
               width={130}
               height={50}
               />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((items)=>(
            <li key={items.label}>
              <a 
            href={items.href}
            className='font-montserrat leading-normal text-lg text-white hover:text-coral-blue'>{items.label}</a></li>)
          )}
        </ul>
        
      </nav>
    </header>
  )
}

export default Nav
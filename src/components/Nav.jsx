import React from 'react'

import {hamburger} from '../assets/icons/'
import {headerLogo} from '../assets/images/'
import { navLinks } from '../constants'

const Nav = () => {
  return (
    <header className='padding-x py-8 w-full z-10 absolute'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img src={headerLogo} 
               alt="header-logo" 
               width={130}
               height={29}/>
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((items)=>(
            <li key={items.label}>
              <a 
            href={items.href}
            className='font-montserrat leading-normal text-lg text-slate-gray'>{items.label}</a></li>)
          )}
        </ul>
        <div>
          <img src={hamburger}
               alt="hamburger"
               width={25}
               height={25}
               className='hidden max-lg:block'/>
        </div>
      </nav>
    </header>
  )
}

export default Nav
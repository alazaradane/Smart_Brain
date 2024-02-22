import React from 'react'
import {footerLogo} from '../assets/images/index'
import {footerLinks, socialMedia} from '../constants/index'
import { copyrightSign } from '../assets/icons'

const Footer = () => {
  return (
    <footer className=' max-container flex flex-col '>
      <div className=' flex justify-between items-start gap-20 flex-wrap max-lg:flex-row '>
        <div className=' flex items-start flex-col'>
          <a href="/">
            <img src={footerLogo} alt="Footer Logo" width={150} height={46} />
          </a>
          <p className=' mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
            Get Shoes ready for the new term at your nearest store. Find your perfect size in store. Get rewards
          </p>
          <div className=' flex items-center gap-5 mt-8 cursor-pointer'>
            {socialMedia.map((icon)=>(
              <div className=' flex items-center justify-center w-12 h-12 bg-white rounded-full hover:bg-coral-red'>
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <div className=' flex justify-between lg:gap-10 gap-20 flex-wrap max-md:gap-10 max-lg:gap-10 max-lg:justify-center'>
          {footerLinks.map((section)=>(
            <div key={section}>
              <h4 className=' text-white font-montserrat text-2xl leading-normal font-medium mb-6'>{section.title}</h4>
              <ul>
                {section.links.map((link)=>(
                  <li className=' mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-coral-red cursor-pointer'
                      key={link.name}>
                    <a>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className=' flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className=' flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img src={copyrightSign} 
               alt="Copy Right Sign"
               width={20}
               height={20}
               className='rounded-full m-0 ' />
          <p className=' hover:text-white cursor-pointer'>Copyright. All rights reserved!</p>
        </div>
        <p className=' font-montserrat cursor-pointer hover:text-white'>Terms and Conditions</p>
      </div>
    </footer>
  )
}

export default Footer
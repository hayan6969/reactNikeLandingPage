import React from 'react'
import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import {navLinks} from '../constants'
import Example from './Menu'

function Nav() {
  return (
    <header className='padding-x py-8 absolute z-20 w-full '>
      <nav className='flex justify-between items-center max-container '>
        <a href="/">
          <img src={headerLogo} 
          width={130}
          height={29}
          alt="" />
        </a>
        
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item,index)=>(
            <li key={index} >
              <a href={item.href} className='font-montserrat leading-normal hover:text-coral-red text-lg text-slate-gray'>{item.label}</a>
            </li>
          ))}
          
        </ul>
        <div className='lg:hidden z-40'>
          <Example/>
        </div>

      </nav>
    </header>
  )
}

export default Nav
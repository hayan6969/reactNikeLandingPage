import React from 'react'
import {footerLogo} from '../assets/images'
import {footerLinks, socialMedia} from '../constants'
import { copyrightSign } from '../assets/icons'


function Footer() {
  return (
    <footer className='max-container '>
      <div className='flex justify-between items-start gap-20 flexwrap max-lg:flex-col'>
        <div className='flex flex-col item-start'>
<a href="/">
  <img src={footerLogo} 
  width={150}
  height={46}
  alt="" />
</a>
<p className='text-base leading-7 mt-6 font-montserrat  text-white-400 sm:max-w-sm'>Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
<div className='flex items-center gap-5 mt-8'>
  {socialMedia.map((icon)=>(<div key={icon.src} className='flex justify-center items-center w-12 h-12 bg-white rounded-full'>
    <img src={icon.src}
    width={24}
    height={24}
     alt="" />
  </div>))}
</div>
        </div>
        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
{footerLinks.map((section,index)=>(
<div key={section.title}> <h4 className='text-white font-montserrat text-2xl leading-normal font-medium mb-6'>{section.title}</h4>
<ul>
  {section.links.map((link,index)=>(
    <li key={link.name} className='mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray '>
      <a href="">{link.name}</a>
    </li>
  ))}
</ul>
</div>
))}
        </div>
      </div>
      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat '>
          <img src={copyrightSign}
          width={20}
          height={20}
           className='rounded-full m-0'
          alt="" />
          <p>Copyright. All rights reserved.</p>
          <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
        </div>
        

      </div>
      <div className='mt-4 flex justify-center items-center border-2 border-coral-red rounded-full hover:bg-coral-red transition-all ease-in duration-200 hover:text-black cursor-pointer w-[200px] '>
       <a className='text-white font-montserrat ' href="https://www.linkedin.com/in/hayan-khan-9b154826a/">Website By Hayan</a>
        </div>
    </footer>
  )
}

export default Footer
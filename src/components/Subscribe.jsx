import React from 'react'
import Button from './Button'

function Subscribe() {
  return (
    <section id="contact-us" className='max-container flex justify-between items-center  flex-col  gap-10'>
      <h3 className='text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold  '>Sign Up For <span className='text-coral-red'>Updates</span> & Newsletter</h3>
      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
        <input type="text"
        className='input '
        placeholder='Subscribe@nike.com'
         />
         <div className='flex max-sm:justify-end items-center mt-3 max-sm:w-full '>
          <Button label="Sign Up"
          fullWidth
          
          />
         </div>
      </div>
    </section>
  )
}

export default Subscribe
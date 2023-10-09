import React from 'react'
import { ShirtC } from './ShirtC'
import {shirts} from '../constants/Products'

function Shirts() {
  return (
    <section className="padding-l padding-r mb-[105px]">
        
        <div className=' relative top-[100px]'>
        <div className='flex justify-center items-center mb-4'><h1 className='font-montserrat text-3xl font-bold  underline decoration-coral-red'>Shirts</h1></div>
<div className='flex justify-evenly flex-wrap items-center max:md:flex-col'>
   {shirts.map((shirt)=>(
         <div className='m-2 ' key={shirt.name}> <ShirtC  image={shirt.image} title={shirt.name} price={shirt.price} /> </div>
    ))  
   }
</div>
        </div>
        </section>
  )
}

export default Shirts
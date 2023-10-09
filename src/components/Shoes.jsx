import React from 'react'
import { ShoeC } from './ShoeC'
import {shoesN} from '../constants/Products'

function Shoes() {
  return (
    <section className="padding-l padding-r mb-[105px]">
        
        <div className=' relative top-[100px]'>
        <div className='flex justify-center items-center mb-4'><h1 className='font-montserrat text-3xl font-bold  underline decoration-coral-red'>Shoes</h1></div>
<div className='flex justify-evenly flex-wrap items-center max:md:flex-col'>
   {shoesN.map((Shoes)=>(
         <div className='m-2' key={Shoes}> <ShoeC  image={Shoes.image} title={Shoes.name} price={Shoes.price} /> </div>
    ))  
   }
</div>
        </div>
        </section>
  )
}

export default Shoes
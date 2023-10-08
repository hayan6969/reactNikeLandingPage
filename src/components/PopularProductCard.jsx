import React from 'react'
import star from '../assets/icons/star.svg'

function PopularProductCard({imgURL,name,price}) {
  return (
    <div className='flex flex-1 flex-col w-full  max-sm:w-full'>
        <div class="card" className=' rounded-lg hover:scale-105 transition-all duration-300 ease-in-out '>
            <button className='hidden'>Buy</button>
            
        <img src={imgURL} alt=""
        className='w-[280px] h-[280px] object-cover rounded-lg object-center  hover:cursor-pointer  transition-all duration-300 ease-in-out'
         />
        </div>
         <div className='mt-8 flex justify-start gap-2.5 '>
            <img src={star} alt="" 
            width={24} height={24}
            />
            <p className='font-montserrat text-xl leading-normal text-slate-gray'>(4.5)</p>
         </div>
         <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>{name}</h3>
         <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>{price}</p>
    </div>
  )
}

export default PopularProductCard
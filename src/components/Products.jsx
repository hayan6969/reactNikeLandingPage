import React from 'react'
import { shoesN } from '../constants/Products'
import { shirts } from '../constants/Products'
import { EcommerceCard } from './Pcard'
import { Link,NavLink } from 'react-router-dom'
function Products() {
  return (
    
    <section className="xl:padding-l wide:padding-r padding-b ">
    <div id='shop' className='w-full  h-screen relative top-[90px] flex justify-evenly items-center max-md:flex-col  max-md:top-[400px]'>
      <NavLink className='mt-[80px] mb-[30px]' to="reactNikeLandingPage/Shoes">
      <EcommerceCard image={shoesN[0].image} title="Nike Shoes" info="Buy cool nike shoes now"/>

      </NavLink>
<NavLink className='mt-[80px] mb-[30px]' to="reactNikeLandingPage/Shirts"> 
<EcommerceCard image={shirts[0].image} title="Nike Shirts" info="Buy cool nike shirts now"/>

</NavLink>
    </div>
  </section>
  )
}

export default Products
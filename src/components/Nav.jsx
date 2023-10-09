import React from 'react';
import { headerLogo } from '../assets/images';
import { navLinks } from '../constants';
import Example from './Menu';
import {Cart} from '../assets/icons';
import { useCart } from '../../contexts/CartContext';
import { Link, NavLink } from 'react-router-dom';

function Nav() {
  const { itemsArray } = useCart();

  return (
    <header className='padding-x py-8 absolute max-lg:bg-white: z-20 w-full  '>
      <nav className='flex justify-between items-center max-container padding-l padding-r '>
        <NavLink to="/reactNikeLandingPage">
          <img src={headerLogo} width={130} height={29} alt="" />
        </NavLink>

        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
        <NavLink to="/reactNikeLandingPage"  className='font-montserrat leading-normal hover:text-coral-red text-lg text-slate-gray'>Home</NavLink>

        
          <li>
            <NavLink to="reactNikeLandingPage/shop"  className='font-montserrat leading-normal hover:text-coral-red text-lg text-slate-gray'>Shop</NavLink>
          </li>
        </ul>
        <NavLink to="reactNikeLandingPage/cart">
        <div className='flex justify-center items-center max-lg:ml-[65px]  h-[50px] w-[60px]'>
          <img className='' src={Cart} width={35} height={20} alt="" />
          <div className='w-[20px] h-[20px] flex justify-center items-center text-white font-bold font-montserrat rounded-full bg-coral-red'>{itemsArray.length}</div>
        </div>
        </NavLink >
        <div className='lg:hidden z-40'>
          <Example />
        </div>

      </nav>
    </header>
  )
}

export default Nav;

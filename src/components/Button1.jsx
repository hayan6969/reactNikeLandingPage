import { useState } from "react";
import { useCart } from "../../contexts/CartContext";
import '../assets/button.css'
const Button = ({
    label,
    iconURL,
    backgroundColor,
    textColor,
    borderColor,
    fullWidth,
    name,
    image,
    price
  }) => {
  const{addToCart,itemsArray}=useCart();
    const addingToCart = (e) => {
      e.preventDefault();
      addToCart(image,name,price);
      

    }

    return (
      
<button  onClick={(e)=>{addingToCart(e)}}
        className={`flex max-xl:mb-3 active:scale-x-125 active:bg-red-600 active:border-2 duration-400 transform transition  justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg  leading-none
        ${
          backgroundColor
            ? `${backgroundColor} ${textColor} ${borderColor}`
            : "bg-coral-red text-white border-coral-red"
        } rounded-full ${fullWidth && "w-full"}`}
      >
        
        {label}
  
        {iconURL && (
          <img
            src={iconURL}
            alt='arrow right icon'
            className=' p-1 rounded-full bg-white  w-6 h-6'
          />
        )}
        
      </button>
        
    );
  };
  
  export default Button;
import React from 'react'
import { useCart } from '../../contexts/CartContext'
import { useState } from 'react'
import { useEffect } from 'react'


function CartComponent() {
    const { itemsArray,removeFromCart,addToCart , removequantity,itemquanitity} = useCart()
    const tax=4.99;
    const [total,setTotal] = useState(0)
    useEffect(() => {
        // Calculate the total price when itemsArray changes
        const totalPrice = itemsArray.reduce((acc, item) => acc + (parseFloat(item.price) * parseInt(item.number)), 0);
        setTotal(totalPrice);
      }, [itemsArray,itemquanitity]);
    const handleRemoveFromCart = (itemId) => {
        // Create a copy of the current itemsArray without the item to be removed
        const updatedItemsArray = itemsArray.filter((item) => item.id !== itemId);
        
        // Update the cart state
        removeFromCart(itemId);
      
        // Update localStorage to reflect the removed item
        localStorage.setItem('itemsArray', JSON.stringify(updatedItemsArray));
      };
    
   
  return (
   


<body>
      <div className="h-full pt-20  overflow-y-auto relative lg:top-[50px] top-[120px] ">
        <h1 className="mb-10 text-center text-2xl font-montserrat font-bold decoration-coral-red underline">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3 ">
            {itemsArray.map((item) => ( 
              <div key={item.id} className="justify-between mb-6 rounded-lg  max-md:w-[300px]  p-6 shadow-xl sm:flex sm:justify-start">
                <img src={item.image} alt="product-image" className="w-full rounded-lg sm:w-40" />
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div className="mt-5 sm:mt-0">
                    <h2 className="text-lg font-bold text-gray-900">{item.name}</h2>
                    <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
                  </div>
                  <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div className="flex items-center border-gray-100">
                      <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={()=>{removequantity(item.name)}}> - </span>
                      <input className="h-8 w-8 border bg-white text-center text-xs outline-none disabled font-montserrat" type="number" value={item.number}  />
                      <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={()=>{addToCart(item.image,item.name,item.price)}}> + </span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <p className="text-xl font-montserrat font-bold">{item.price}</p>
                      <div className='font-montserrat flex justify-center items-center font-bold rounded-full border-black border-2 w-[30px]'>
                        <button onClick={() => handleRemoveFromCart(item.id)} className='hover:text-coral-red'>X</button>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">${total}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Shipping</p>
              <p className="text-gray-700">${tax.toFixed(2)}</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div>
                <p className="mb-1 text-lg font-bold">${(total + tax).toFixed(2)} USD</p>
                <p className="text-sm text-gray-700">including VAT</p>
              </div>
            </div>
            <button className="mt-6 w-full rounded-md bg-coral-red py-1.5 font-medium font-montserrat text-blue-50 hover:bg-red-500">Check out</button>
          </div>
        </div>
      </div>
    </body>
  )
}

export default CartComponent
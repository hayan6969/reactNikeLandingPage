import { useCart } from '../../contexts/CartContext'
import { useEffect } from 'react';
import { SearchC } from './SearchC';
import { useState } from 'react';

function SearchPage() {
    const {setSearchItem,searchItem}=useCart();
    const [name,setName]=useState("");
    useEffect(()=>{
        console.log(name);
        if(name!==""){
            setSearchItem(name);
    }
    },[name])
  return (
    <section className="pt-[100px]">
       <div className='w-full flex flex-col justify-start items-center min-h-screen gap-10 padding-l padding-r  max-container'>
        <div className=' w-[300px] flex justify-center items-center h-[100px]'>
                <input type="text" placeholder='Search Here' onChange={(e)=>{setName(e.target.value)}} className='rounded-lg border-2 border-coral-red  focus:outline-none p-1 font-montserrat font-medium' />
        </div>
        <div className='w-full h-auto flex justify-evenly max-md:justify-center flex-wrap'>
          {searchItem.map((item)=>(
              <SearchC image={item.image} title={item.name} info={item.id} price={item.price} key={item.id}/>
          )) }
        </div>
    </div>
     </section>
   
  )
}

export default SearchPage
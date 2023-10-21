import {
  CustomerReviews,
  Footer,
  Specialoffer,
  SuperQuality,
  Services,
  PopularProducts,
  Hero,
  Subscribe,
} from "./components";
import Nav from "./components/Nav";
import Products from "./components/Products";
import Shoes from "./components/Shoes";
import Shirts from "./components/Shirts";
import { CartProvider1 } from "../contexts/CartContext";
import { useState ,useEffect} from "react";
import Shopping from "./components/Shopping";
import Home from "./components/Home";
import { Outlet } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import SearchPage from "./components/SearchPage";
import { allproducts } from "./constants/Products";

function App() {
  const [itemsArray, setItemsArray] = useState([]);
  const [searchItem,setSearchItems]=useState(allproducts);
  const setSearchItem=(name)=>{
setSearchItems(allproducts.filter((item)=>item.name.toLowerCase().includes(name.toLowerCase())));
  }
  const [itemquanitity,setItemQuantity]=useState(0);
  const addToCart = (image,name,price) => {
    let exists=false;
    itemsArray.map((item)=>{
      if(item.name===name){
        setItemQuantity((prev)=>prev+1);
        item.number+=1;
        exists=true;
        localStorage.setItem("itemquanitity", JSON.stringify(itemquanitity))

        return;

      }
    })
    if(exists===false)
    { 
      setItemQuantity((prev)=>prev+1);
      setItemsArray((prev) => [{image,name,price,id:Date.now(),number:1}, ...prev]);
      localStorage.setItem("itemsArray", JSON.stringify(itemsArray))
      localStorage.setItem("itemquanitity", JSON.stringify(itemquanitity))



    }
    
  
  };

  const removequantity=(name)=>{
    itemsArray.map((item)=>{
      if(item.name===name){
        if(item.number>0){
          setItemQuantity((prev)=>prev-1);
          item.number-=1;
        }
        if(item.number===0){
          removeFromCart(item.id);
          window.scrollTo(0, 0);

        }
        localStorage.setItem("itemquanitity", JSON.stringify(itemquanitity))
        localStorage.setItem("itemsArray", JSON.stringify(itemsArray))

        return;
      }
    })
  }

  const removeFromCart = (id) => {
itemsArray.forEach((item)=>{
  if(item.id===id){
    setItemQuantity((prev)=>prev-item.number);
  }
})

    setItemsArray((prev) => prev.filter((item) => item.id !== id))
    window.scrollTo(0, 0);

    localStorage.setItem("itemsArray", JSON.stringify(itemsArray))
    localStorage.setItem("itemquanitity", JSON.stringify(itemquanitity))

  }

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("itemsArray"))
    const itemquanitity=JSON.parse(localStorage.getItem("itemquanitity"))
    if (itemquanitity) {
      setItemQuantity(itemquanitity)
    }

    if (items && items.length > 0) {
      setItemsArray(items)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("itemsArray", JSON.stringify(itemsArray))
    localStorage.setItem("itemquanitity", JSON.stringify(itemquanitity))


  }, [itemsArray])
  return (
    <CartProvider1 value={{itemsArray,addToCart,removeFromCart,itemquanitity,removequantity,searchItem,setSearchItem}}>
      <ScrollToTop/>
    <main className="relative">
      <Nav/>
     <Outlet/>
      
      <section className="padding bg-black padding-x padding-t pb-8 mt-20 max-md:mt-[700px]">
        <Footer />
      </section>
    </main>
    </CartProvider1>
    
  );
}

export default App;

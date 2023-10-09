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

function App() {
  const [itemsArray, setItemsArray] = useState([]);
  const addToCart = (image,name,price) => {
    setItemsArray((prev) => [{image,name,price,id:Date.now()}, ...prev]);
  };

  const removeFromCart = (id) => {
    setItemsArray((prev) => prev.filter((item) => item.id !== id))
  }

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("itemsArray"))

    if (items && items.length > 0) {
      setItemsArray(items)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("itemsArray", JSON.stringify(itemsArray))
  }, [itemsArray])
  return (
    <CartProvider1 value={{itemsArray,addToCart,removeFromCart}}>
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

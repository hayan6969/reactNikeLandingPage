import { useContext,createContext,} from "react";

export const CartContext = createContext({
    itemsArray:[
        {
            name:"Nike Air Max 270",
            price:"$170",
            image:'',
            id:1,
        }

        
    ],
    addToCart:(image,name,price,id)=>{

    },
    removeFromCart:(id)=>{

    },
});
export const CartProvider1 = CartContext.Provider;
export const useCart = () => useContext(CartContext);
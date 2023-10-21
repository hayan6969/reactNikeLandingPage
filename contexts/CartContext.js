import { useContext,createContext,} from "react";

export const CartContext = createContext({
    itemsArray:[
        {
            name:"Nike Air Max 270",
            price:"$170",
            image:'',
            id:1,
        },
        
        
    ],
    removequantity:(name)=>{}
    ,

    itemquanitity:0,
    searchItem:[{
        name:"Nike Air Max 270",
        price:"$170",
        image:'',
        id:1,
    
    }]
    ,
    setSearchItem:(name)=>{
     
    },

    addToCart:(image,name,price,id)=>{

    },
    removeFromCart:(id)=>{

    },
});
export const CartProvider1 = CartContext.Provider;
export const useCart = () => useContext(CartContext);
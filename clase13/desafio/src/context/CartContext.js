import React, {useState,useEffect} from 'react'

export const  CartContext = React.createContext([])

export const CartProvider = ({children}) => {
    // array con items de este forma   {item:item, quantity: number}
    const [cart,setCart] = useState([])
    const [totalItems,setTotalItems] = useState(0);
    const [totalPrecio,setTotalPrecio] = useState(0)

    useEffect(()=>{

        let totItems = 0;
        let precio = 0;

        for(let cartItem of cart) {
            totItems += cartItem.quantity;
            precio += cartItem.quantity * cartItem.item.price;
        }

        setTotalItems(totItems);
        setTotalPrecio(precio)

    },[cart])
    

    const addItem = (newItem, newQuantity)=>{

        const prevCartItem = cart.find(e=> e.item.id === newItem.id)

        let newCart;
        let qty;
        if (prevCartItem){
            newCart = cart.filter(e => e.item.id !== newItem.id)
            qty = prevCartItem.quantity + newQuantity;
        }else{
            newCart = [...cart]
            qty =  newQuantity;
        }

        setCart([...newCart, 
                { item: newItem , quantity: qty  }])
        
    } // agregar cierta cantidad de un ítem al carrito


    const removeItem = (itemId) =>{
        const newCart = cart.filter(e => e.item.id !== itemId)
        setCart(newCart)
    }// Remover un item del cart por usando su id
    
    const clear = ()=>{
        setCart([])
    } // Remover todos los items
    
    const isInCart = (id) =>{
        const currentItem = cart.find(e=> e.item.id === id)

        return currentItem ? true : false
    } 



    return (
    <CartContext.Provider value={{cart,addItem,removeItem,clear,isInCart, totalItems,totalPrecio}} >
        {children}
    </CartContext.Provider>
    )
}

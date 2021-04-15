import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const CartWidget = () =>{
    const {totalItems} = useContext(CartContext)

    return <>
            {totalItems? <i>Carrito {totalItems}</i>: null } 
    </>
}

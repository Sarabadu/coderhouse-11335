import React, {useContext, useState} from 'react'
import {ItemCount} from './ItemCount'
import { Link } from "react-router-dom";
import { CartContext } from '../context/CartContext';


export function ItemDetail({ item }) {
    const [qty, setQty] = useState(0)

    const {addItem} = useContext(CartContext)

    const onAdd = (quantityToAdd) => {
        const qty = parseInt(quantityToAdd)
        console.log('se agrego un item', qty)
        addItem(item, qty)
        setQty(qty)
    } 
    return <>
                <h4>{item.title}</h4>
                { qty === 0 ?
                    (item.title && <ItemCount stock={6} initial={1} onAdd={onAdd} />)
                        :
                    <Link to='/cart' >
                        <button >Terminar mi compra</button>
                    </Link> 
                }
            </>;
   
  }
  
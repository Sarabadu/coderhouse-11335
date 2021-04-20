import React, { useContext, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

import {getFirestore, getFirebase} from '../firebase' 

export const Cart = () => {

    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')
    const [email,setEmail] = useState('')

    const [idOrden, setIdOrden ] = useState(null)

    const {cart,removeItem,totalItems,totalPrecio,clear} = useContext(CartContext)

    const guardarOrden = (e)=>{
        e.preventDefault();
        const comprador = { name, phone, email }
        
        console.log(comprador)

        const db = getFirestore();

        const ordersCollection = db.collection("orders")

        const date = getFirebase().firestore.Timestamp.fromDate(new Date());

        const items = cart.map(cartItem => {
            return {id: cartItem.id, title:cartItem.title, price: cartItem.price} 
        })

        ordersCollection
        .add({buyer: comprador, items , date, total:totalPrecio })
        .then(doc=>{
            setIdOrden(doc.id)
        })


        const itemsCollection = db.collection('items')
        .where(getFirebase().firestore.FieldPath.documentId(), 'in', cart.map(e => e.item.id))

        itemsCollection.get()
        .then(resultado =>{

            const batch = db.batch()

            for (const documento of resultado) {

                const stockActual = documento.data().stock;

                const itemDelCart = cart.find(cartItem => cartItem.item.id == documento.id);

                const cantidadComprado = itemDelCart.quantity

                const nuevoStock =  stockActual - cantidadComprado;


                batch.update(documento.ref,
                    {stock: nuevoStock}
                )
                //update
                
            }

            batch.commit()

        })

    }

    const noItemComp = <h2>No hay Items en el carrito <Link to='/'>Ir al home </Link> </h2>;

    if(totalItems === 0) return noItemComp



    return (
        <div>
            {idOrden? `Orden generada: ${idOrden}`: null}

            {cart.map(cartItem => (
                <div key={cartItem.item.id} >
                    <div> Titulo:  {cartItem.item.title}  </div>
                    <div> cantidad: {cartItem.quantity} </div>
                    <button onClick={()=> removeItem(cartItem.item.id)}>borrar</button>
                </div>)
                )}
            <div>Total:{totalItems} y {totalPrecio}</div> 
            <button onClick={clear}>Borrar todo</button>         

            <form action=""  onSubmit={guardarOrden}>

                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>

                <button type="submit"> Generar orden</button>
            </form>

        </div>
    )
}

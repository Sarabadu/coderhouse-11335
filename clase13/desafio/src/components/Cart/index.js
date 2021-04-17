import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext';
import firebase from 'firebase/app'
import 'firebase/firestore'

import {getFirestore} from '../../firebase'
export const Cart = () => {

    const {cart,removeItem,totalItems,totalPrecio,clear} = useContext(CartContext)

    const generarOrden = () =>{
        const db = getFirestore();

        const ordersCol = db.collection('orders');

        let orden = {}
        orden.date = firebase.firestore.Timestamp.fromDate(new Date());

        orden.buyer = { name:'Juan', phone:'mi telefono', email:'pepe86@AOL.com.ar' }
        orden.total = totalPrecio;
        orden.items = cart.map(cartItem => {
            const id = cartItem.item.id;
            const title = cartItem.item.title;
            const price = cartItem.item.price * cartItem.quantity;

            return {id, title, price}   
        })


        ordersCol.add(orden)
        .then((IdDocumento)=>{
            console.log(IdDocumento.id)
        })
        .catch( err => {
            console.log(err);
        })
        .finally(()=>{
            console.log('termino la promesa')
        })

        const itemsToUpdate = db.collection('items').where(
            firebase.firestore.FieldPath.documentId(), 'in', cart.map(i=> i.item.id)
        )

        const batch = db.batch();

        // por cada item restar del stock la cantidad de el carrito

        itemsToUpdate.get()
        .then( collection=>{
            collection.docs.forEach(docSnapshot => {
                batch.update(docSnapshot.ref,{
                    stock: docSnapshot.data().stock - cart.find(item => item.item.id === docSnapshot.id).quantity
                })
            })

            batch.commit().then(res =>{
                console.log('resultado batch:', res)
            })
        })

        console.log(orden)
    }

    const noItemComp = <h2>No hay Items en el carrito <Link to='/'>Ir al home </Link> </h2>;

    if(totalItems === 0) return noItemComp

    return (
        <div>
           <ul style={{listStyle:'none', padding:0}}>
            {cart.map(cartItem => {
                return (
                    <li key={cartItem.item.id}  style={{display:'flex',width:'40%',justifyContent:'space-between', margin:'5px auto'}}>
                        <div> Titulo:  {cartItem.item.title}  </div>
                        <div> cantidad: {cartItem.quantity} </div>
                        <button onClick={()=> removeItem(cartItem.item.id)}>borrar</button>
                    </li>
                );
            }
            )}

           </ul>
            <div>Total:{totalItems} y {totalPrecio}</div> 
            <button onClick={clear}>Borrar todo</button>  

            <button onClick={generarOrden}>Finalizar Compra</button>       


        </div>
    );
}


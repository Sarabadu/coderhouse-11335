import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail'
import { useParams } from "react-router-dom";

import {getFirestore} from '../../firebase';


const getItems = (id) => { /* Esta función debe retornar la promesa que resuelva con delay */ 
    const db = getFirestore();
    const itemsCollection = db.collection('items')
    
    const item = itemsCollection.doc(id) 
    return item.get();
}

export default function ItemDetailContainer() {
    const [item, setItem] = useState(null)
    const {itemId, otroId} = useParams()

    useEffect(() => {
        getItems(itemId)
        .then((res)=> {
            console.log('existe?', res.exists);
            if (res.exists){
                setItem(res.data())
            }
        })
        return;
    }, [itemId])

    // Implementar mock invocando a getItems() y utilizando el resolver then
     return <> {itemId} - {otroId}
     <ItemDetail item={item} /></>/* JSX que devuelva un ItemDetail (desafío 6b) */
    }






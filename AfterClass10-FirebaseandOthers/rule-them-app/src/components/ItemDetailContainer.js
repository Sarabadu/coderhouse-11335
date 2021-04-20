import React, {useEffect, useState}from 'react'
import {ItemDetail} from './itemDetail'
import { useParams } from "react-router-dom";

const datos = [ 
    { id:1,   categoria:'desafios' , title:'Remeras', description:'desafio- Remeras Rojas',        price:25,  pictureUrl:''  },
    { id:23,  categoria:'desafios' , title:'Pantalon', description:'desafio- Pantalon de jean',    price:35,  pictureUrl:'' },
    { id:78,  categoria:'after' , title:'Medias', description:'after- Medias con dibujitos',  price:500, pictureUrl:'' },
    { id:11,  categoria:'entregas' ,  title:'Remeras', description:'entregas- Remeras Rojas',        price:25,  pictureUrl:'' },
    { id:123, categoria:'entregas' , title:'Pantalon', description:'entregas- Pantalon de jean',    price:35,  pictureUrl:'' },
    { id:178, categoria:'entregas' , title:'Medias', description:'entregas- Medias con dibujitos',  price:500, pictureUrl:'' }
]


const getItems = (id) => { 
    return new Promise((trajoDatosOk,error)=>{
        setTimeout(()=>{
            trajoDatosOk(datos.find((e)=> e.id === parseInt(id)))
        },2000)
    })

}


export function ItemDetailContainer() {
    const [datosDelItem, setDatosDelItem] = useState({});
    const {itemId} =useParams()

    useEffect(() => {

        getItems(itemId)
        .then((datos)=>{
            setDatosDelItem(datos)
        })

    }, [itemId])   

 return <ItemDetail item={datosDelItem} />
}

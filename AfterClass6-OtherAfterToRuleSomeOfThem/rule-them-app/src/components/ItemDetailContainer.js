import React, {useEffect, useState}from 'react'
import {ItemDetail} from './itemDetail'


const datos = { id:1,  
                title:'Remeras', 
                description:'Remeras Rojas',        
                price:25,  
                pictureUrl:'' }


const getItems = () => { 
    return new Promise((trajoDatosOk,error)=>{
        setTimeout(()=>{
            trajoDatosOk(datos)
        },2000)
    })

}


export function ItemDetailContainer() {
    const [datosDelItem, setDatosDelItem] = useState({});

    useEffect(() => {

        getItems()
        .then((datos)=>{
            setDatosDelItem(datos)
        })

    }, [])   

 return <ItemDetail item={datosDelItem} />
}

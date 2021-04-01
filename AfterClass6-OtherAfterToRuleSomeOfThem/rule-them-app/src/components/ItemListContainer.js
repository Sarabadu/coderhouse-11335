import React, { useEffect,useState } from 'react'
import { ItemCount } from './ItemCount'
import { ItemList } from './ItemList'

const datos = [ 
    { id:1,  title:'Remeras', description:'Remeras Rojas',        price:25,  pictureUrl:'' },
    { id:23, title:'Pantalon', description:'Pantalon de jean',    price:35,  pictureUrl:'' },
    { id:78, title:'Medias', description:'Medias con dibujitos',  price:500, pictureUrl:'' }
]

export const ItemListContainer = ({greeting:saludo, a ,   b:otrab }) => {
    const [resultadoDeItems, setResultadoDeItems] = useState(null)

    useEffect(()=>{
        const llamadaAlServidor = new Promise((trajoDatosOk,error)=>{
            setTimeout(()=>{
                trajoDatosOk(datos)
            },2000)
        })

        
        llamadaAlServidor.then((datos) =>{
            setResultadoDeItems(datos)
        })

    },[])

    const seAgrego = (num)=>{console.log('se agrego un item',num)};
    
    return (
        <div>
            <h4>{saludo} - {a} - {otrab}</h4>

            { resultadoDeItems  
            ? <ItemList items={resultadoDeItems}  /> 
            : null}

            <div>
                <ItemCount initial={11} stock={10} onAdd={seAgrego}/>
            </div>
        </div>
    )
}

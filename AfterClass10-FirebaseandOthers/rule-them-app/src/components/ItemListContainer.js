import React, { useEffect,useState } from 'react'
import { ItemCount } from './ItemCount'
import { ItemList } from './ItemList'
import { useParams } from 'react-router-dom'

const datos = [ 
    { id:1,   categoria:'desafios' , title:'Remeras', description:'desafio- Remeras Rojas',        price:25,  pictureUrl:''  },
    { id:23,  categoria:'desafios' , title:'Pantalon', description:'desafio- Pantalon de jean',    price:35,  pictureUrl:'' },
    { id:78,  categoria:'after' , title:'Medias', description:'after- Medias con dibujitos',  price:500, pictureUrl:'' },
    { id:11,  categoria:'entregas' ,  title:'Remeras', description:'entregas- Remeras Rojas',        price:25,  pictureUrl:'' },
    { id:123, categoria:'entregas' , title:'Pantalon', description:'entregas- Pantalon de jean',    price:35,  pictureUrl:'' },
    { id:178, categoria:'entregas' , title:'Medias', description:'entregas- Medias con dibujitos',  price:500, pictureUrl:'' }
]

export const ItemListContainer = ({greeting:saludo, a ,   b:otrab }) => {
    const [resultadoDeItems, setResultadoDeItems] = useState(null)

    const {categoryId} = useParams();
    

    useEffect(()=>{
        const llamadaAlServidor = new Promise((trajoDatosOk,error)=>{
            setTimeout(()=>{
                if(categoryId){
                    trajoDatosOk(datos.filter(e=>e.categoria === categoryId))
                } else{
                    trajoDatosOk(datos)
                }
            },2000)
        })

        
        llamadaAlServidor.then((datos) =>{
            setResultadoDeItems(datos)
        })

    },[categoryId])

    
    return (
        <div>
            <h4>Categoria: {categoryId}</h4>

            { resultadoDeItems  
            ? <ItemList items={resultadoDeItems}  /> 
            : null}
        </div>
    )
}

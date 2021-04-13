import React, { useEffect, useState } from "react";
import { ItemCount } from "../ItemCount";
import {ItemList} from "../ItemList"

import { useParams } from "react-router-dom";

export default function ItemListContainer() {
  const [items, setItems] = useState([])

  const {categoryId} = useParams()

  useEffect(()=>{

    const prom = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve([
          { id:1, title:"Campera", price:20000, pictureUrl:"https://www.doiteargentina.com.ar/wp-content/uploads/2019/04/doite-campera-3en1-spirit-verde-pistacho-hombre-01.jpg" },
          { id:2, title:"Mochila", price:14000, pictureUrl:"https://www.doiteargentina.com.ar/wp-content/uploads/2017/05/doite-mochila-traveller-lemaire-75-15-azul-01.jpg"},
          { id:3, title:"Pantalon", price:6000, pictureUrl:"https://www.doiteargentina.com.ar/wp-content/uploads/2018/12/pantalon-doite-kawescar-desmontable-trekking-hombre-01.jpg" }
        ])
      },2000)
    })

    prom.then((resultado)=>{
      setItems(resultado)
    })

  })

  return (
    <div className="container ">
      Items de la categoria {categoryId}
      <ItemList items={items}/>
     
    </div>
  );
}

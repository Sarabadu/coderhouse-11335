import React from 'react'
import {Item} from './Item'
export const ItemList = ({ items})=>{

    return <>
          {items.map( elemento => <Item item={elemento} /> )}
    </>
}
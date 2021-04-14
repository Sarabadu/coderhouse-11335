import React from 'react'
import { Item } from '../Item'

export const ItemList = ({items=[]}) => {


    return (
        <div className="flex ">
            {items.map(item => <Item key={item.id}  item={item}/> )}
        </div>
    )
}

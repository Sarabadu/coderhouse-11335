import React from 'react'
import { ItemCount } from './ItemCount'

export const ItemListContainer = ({greeting:saludo, a ,   b:otrab }) => {


    const seAgrego = (num)=>{console.log('se agrego un item',num)};
    
    return (
        <div>
            <h4>{saludo} - {a} - {otrab}</h4>
            <div>
                <ItemCount initial={11} stock={10} onAdd={seAgrego}/>
            </div>
        </div>
    )
}

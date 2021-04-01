import React, { useState } from 'react'

export function ItemCount({ stock, initial,  onAdd }) {
    // Desarrollar lógica
    const [count,setCount] = useState(initial);

    const increment = () => {
        if (count >= stock){
            return
        }
        setCount(count+1);
    }
    const decrement = ()=>{
        return setCount(count - 1);
    }

    const addHandler = ()=>{
        onAdd(count)
    }

    return <div>
            <button disabled={ count <= 0} onClick={decrement}>-</button>
            <div>{count}</div>
            <button onClick={increment}>+</button>
            <button disabled={ count <= 0 || count > stock} onClick={addHandler}>Agregar</button>
    </div>
}

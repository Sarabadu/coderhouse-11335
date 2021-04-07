import React, {useContext}from 'react'
import {ContextoCart} from '../../context/MyDynamicContext'

export const Child6 = () => {
    const {nombre,edad,aLaConsola,setNombre} = useContext(ContextoCart)

    return (
        <div className="box box-6">
            {nombre} - {edad}

            <button onClick={()=>{
                aLaConsola()
                setNombre('Pepe')
                aLaConsola()
                }}>Mi nombre es Pepe</button>
        </div>
    )
}

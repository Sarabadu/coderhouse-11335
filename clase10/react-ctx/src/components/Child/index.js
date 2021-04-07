import React,{useContext}from 'react'
import { Child2 } from '../Child2'
import { ContextoCart } from "../../context/MyDynamicContext";

export const Child = () => {
    const {nombre,setNombre} = useContext(ContextoCart)


    return (
        <div className="box box-1">
            <input type="text" onChange={(e)=> setNombre(e.target.value)}/>
            <Child2 nombre={nombre}>

            </Child2> 
        </div>
    )
}

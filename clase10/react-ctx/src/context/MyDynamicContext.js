import React, { useState } from 'react'

export const ContextoCart = React.createContext({})


export const MyDynamicContext = ({children}) =>{
    
    const [nombre, setNombre] = useState('')
    const [edad,setEdad] = useState(0);
    
    function aLaConsola() {
        console.log('Mucho gusto')
    }

    function cambioLaEdad(newEdad){
        setEdad(newEdad)
    }

    return <ContextoCart.Provider value={ {nombre,edad,aLaConsola,cambioLaEdad,setNombre} }>
        {children}
    </ContextoCart.Provider>
}

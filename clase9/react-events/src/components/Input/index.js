import React from 'react'
import './input.css'
export const Input = () => {
    const inputHandler = (event)=>{

        if (event.char == ???){
            event.preventDefault()
        }

        // const currentValue = parseInt(event.target.value) || 0 

        // event.target.value = currentValue + parseInt(event.charCode)  
        
    }



    return (
        <div className="box">
            <input onKeyPress={inputHandler} type="text" name="i" id="i"/>
        </div>
    )
}

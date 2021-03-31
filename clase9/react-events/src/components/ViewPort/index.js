import React, { useEffect, useState } from 'react'


export const ViewPort = () => {
    const [height, setHeight] = useState(0)
    const [width, setWidth] = useState(0)

    useEffect(()=>{
        function resizeHandler(e){
            console.log(e);
             setHeight(e.target.innerHeight)
             setWidth(e.target.innerWidth)
        }
        
        window.addEventListener('resize',resizeHandler)
        
        return () =>{
            console.log("desmontado")
            window.removeEventListener('resize',resizeHandler)
        }

    },[])


    return (
        <div >
            {width} x {height}
        </div>
    )
}

import React from 'react'
import './MyComponent.css'

export const MyComponent2 = ({nombre}) => {

    //useEffect
    console.log('rerender')
    return (
        <h2 className="greenClass">
            chau
        </h2>
    )
}

export const MemoComp2 = React.memo(MyComponent2,
     (newprop,oldpropd) =>  {
        return newprop.nombre === oldpropd.nombre 
     });

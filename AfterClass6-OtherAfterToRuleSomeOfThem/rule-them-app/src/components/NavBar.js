import React from 'react'
import {CartWidget} from './CartWidget';

export const NavBar = () =>{

return <>
        <h1>El Titulo</h1>
        {/* Es un Comentario */}
        <nav>
            <ul>
                <li>Desafios</li>
                <li>Entregas</li>
                <li>AfterClass</li>
            </ul>
        </nav>
        <CartWidget />
    </>;
}

export default NavBar
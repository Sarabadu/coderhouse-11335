import React from 'react'
import {CartWidget} from './CartWidget';
import { Link } from "react-router-dom";

export const NavBar = () =>{

return <div style={{border:'solid red'}}>
        <Link to='/'>
            <h1>El Titulo</h1>
        </Link>
        {/* Es un Comentario */}
        <nav>
            <ul>
                <li> 
                    <Link to='/category/desafios'>
                        Desafios
                    </Link>
                </li>
                <li>
                    <Link to='/category/entregas'>
                        Entregas
                    </Link>
                </li>
                <li>
                    <Link to='/category/after'>
                        AfterClass
                    </Link>
                </li>
            </ul>
        </nav>
        <CartWidget />
    </div>;
}

export default NavBar
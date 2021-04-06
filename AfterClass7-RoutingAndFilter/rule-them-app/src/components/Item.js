import React from 'react'
import { Link } from "react-router-dom";
export const Item = ({item}) => {

    return <>
        <h4>
            <Link to={`/item/${item.id}`}>


                {item.title} - {item.description}
            </Link>
        </h4>
    </>
}
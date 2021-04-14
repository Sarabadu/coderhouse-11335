import React from 'react';
import { Link } from 'react-router-dom';

export const Item = ({ item }) => {
  return (
    <div className="card m-2 flex-row" >
      <img src={item.pictureUrl} alt="" style={{width: "12rem"}} />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <div className="price text-success"><h5 class="mt-4">${item.price}</h5></div>
      </div>
      
      
      <Link to={`/item/${item.id}`}> Link al item</Link>


    </div>
  );
};

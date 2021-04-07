import React, { useEffect, useState } from "react";


export function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(parseInt(initial));



  const addHandle = () => {
    setCount(count + 1);
  };

  const removeHandle = () => {
    setCount(count - 1);
  };
  

  const agregar = () => {
    onAdd(count)
  };

  return (
    <div className="w-25 flex-column align-items-strech">


      <div className="m-2 p-2 d-flex flex-row justify-content-around align-items-center border-secondary border rounded">
        <button
          disabled={count <= 0}
          className="btn btn-outline-primary"
          type="button"
          onClick={removeHandle}
        >
          -
        </button>
        <div>{count}</div>
        <button
          disabled={count >= stock}
          className="btn btn-outline-primary"
          type="button"
          onClick={addHandle}
        >
          +
        </button>
      </div>
      <button
        
        className="btn btn-outline-primary w-75"
        type="button"
        onClick={agregar }
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;

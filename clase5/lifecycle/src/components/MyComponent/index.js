import React, { useState, useEffect } from "react";

export const MyComponent = (props) => {
  const [a, actualizaA] = useState(1);
  const [c, actualizaC] = useState(1);

  useEffect(() => {
    console.log("mounted");

    return () => {
      console.log("se fue");
    };
  }, []);

  console.log("Se ejecuto la funcion Componente");

  return (
    <div>
      <div>Numero:{props.numero}</div>
      <div>Texto:{props.texto}</div>
      <div>{a}</div>
      <div>Bool:{props.bool}</div>
      <div>Obj:{props.obj?.name}</div>

      <input
        type="text"
        name="aa"
        id="aa"
        value={c}
        onChange={(e) => actualizaC(e.target.value)}
      />

      <button disabled={props.bool} onClick={() => actualizaA(a + 5)}>
        my boton1
      </button>
      <button disabled={props.bool} onClick={() => actualizaC(c + 5)}>
        my boton2
      </button>

      <button
        disabled={props.bool}
        onClick={() => console.log("se clickeo pero no actualizo estado")}
      >
        my boton 3
      </button>
      {props.children}
    </div>
  );
};

export default MyComponent;

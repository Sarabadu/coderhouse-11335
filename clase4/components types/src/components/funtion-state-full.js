import React, { useState } from "react";
import { ShowCount } from "./show-count";

function FunctionStateFullComp() {
  const [like, cambiaLike] = useState("No me gusto");

  const [estado, setEstado] = useState("intacto");

  return (
    <div>
      <ShowCount count={like} />
      <ShowCount count={estado} />

      <button
        onClick={() => {
          setEstado("clickeado");
          cambiaLike("Ahora me gusta mas");
        }}
      >
        Click me!!
      </button>
    </div>
  );
}

export default FunctionStateFullComp;

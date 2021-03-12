import React, { useState } from "react";
import "./App.css";
import { MyComponent } from "./components/MyComponent";

function App() {
  const [montado, setMontado] = useState(true);
  const juan = { name: "juan" };
  return (
    <div className="App">
      <h3>Este se desmonta</h3>
      {montado ? (
        <MyComponent
          onClick1={(num) => console.log(`my componente me dio un: ${num}`)}
          onClick2={(num) => console.log(`my componente me dio un2: ${num}`)}
        ></MyComponent>
      ) : null}

      <button onClick={() => setMontado(!montado)}>Desmontar</button>

      <div style={{ marginTop: 20 }}>
        <h3>Este no se desmonta</h3>
        <MyComponent
          texto="text"
          numero={4}
          bool={false}
          obj={juan}
          fun={() => console.log("yo soy fun")}
        ></MyComponent>
      </div>
    </div>
  );
}

export default App;

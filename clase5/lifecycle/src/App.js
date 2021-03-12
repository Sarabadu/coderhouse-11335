import React, { useState } from "react";
import "./App.css";
import { MyComponent } from "./components/MyComponent";

function App() {
  const [montado, setMontado] = useState(true);

  return (
    <div className="App">
      {montado ? (
        <MyComponent
          onClick1={(num) => console.log(`my componente me dio un: ${num}`)}
          onClick2={(num) => console.log(`my componente me dio un2: ${num}`)}
        ></MyComponent>
      ) : null}

      <button onClick={() => setMontado(!montado)}>Desmontar</button>
    </div>
  );
}

export default App;

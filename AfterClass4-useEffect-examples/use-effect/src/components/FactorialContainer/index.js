import React, { useState } from "react";
import FactorialComponent from "../FactorialComponent";

export default function FactorialContainer() {
  const [view1, setView1] = useState(false);
  const [view2, setView2] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        minWidth: "100vw",
        justifyContent: "space-around",
      }}
    >
      <div>
        {view1 ? <FactorialComponent initial={2}></FactorialComponent> : null}
        <button onClick={() => setView1(!view1)}>Toggle</button>
      </div>

      <div>
        {view2 ? <FactorialComponent initial={2}></FactorialComponent> : null}
        <button onClick={() => setView2(!view2)}>Toggle</button>
      </div>
    </div>
  );
}

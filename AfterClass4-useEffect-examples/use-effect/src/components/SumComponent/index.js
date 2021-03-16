import React, { useEffect, useState } from "react";

export default function SumComponent(initial) {
  const [sum, setSum] = useState(0);
  const [num, setNum] = useState(0);
  const [esPar, setEsPar] = useState(true);

  useEffect(() => {
    console.log("calculando protones");

    if (sum % 2 == 0) {
      setEsPar(true);
    } else {
      setEsPar(false);
    }
  }, [sum]);

  //   useEffect(() => {
  //     if (sum % 2 == 0) {
  //       setEsPar(true);
  //     } else {
  //       setEsPar(false);
  //     }
  //     return;
  //   }, [sum]);
  return (
    <div>
      <div>{sum}</div>

      {esPar ? <div>es par!!!</div> : null}

      <input
        type="text"
        name="num"
        id="num"
        value={num}
        onChange={(e) => {
          const val = parseInt(e.target.value);
          isNaN(val) ? setNum(0) : setNum(val);
        }}
      />
      <button onClick={() => setSum(sum + num)}>Sum</button>
    </div>
  );
}

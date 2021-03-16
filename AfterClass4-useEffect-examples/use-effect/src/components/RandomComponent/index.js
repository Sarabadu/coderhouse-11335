import React, { useState, useEffect } from "react";
import { subscribe, unsubscribe } from "../../services/pubsub";

export default function RandomComponent() {
  const [num, setNum] = useState(0);

  useEffect(() => {
    console.log("se esta ejecutando el efecto");

    const fn = (n) => {
      console.log("recibi un nuevo numero");
      setNum(n);
    };

    subscribe(fn);

    const cleanUp = () => {
      console.log("limpiando un poco");
      unsubscribe(fn);
    };

    return cleanUp;
  }, []);

  console.log("se re-renderiza el componente");
  // useEffect(() => {
  //   const handle = (n) => {
  //     console.log("new random number");
  //     setNum(n);
  //   };

  //   subscribe(handle);

  //   return () => {
  //     unsubscribe(handle);
  //   };
  // }, []);
  return <div>{num}</div>;
}

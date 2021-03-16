import React, { useState, useEffect } from "react";
import { initializeIterator, getNextFactorial } from "../../services/factorial";

export default function FactorialComponent({ initial }) {
  const [factorial, setFactorial] = useState(initial);
  const [run, setRun] = useState(false);
  const [key, setKey] = useState(null);

  // only mount
  useEffect(() => {
    console.log("Efecto 1- init");
    const iteratorKey = initializeIterator(initial);
    setKey(iteratorKey);

    return () => {
      //cleanup
    };
  }, []);

  useEffect(() => {
    let id;
    console.log("Efecto 2 - run", run);
    if (run) {
      console.log("setting new interval");

      id = setInterval(() => {
        console.log("interval", id);
        setFactorial(getNextFactorial(key));
      }, 500);
    }
    return () => {
      //cleanup;
      console.log("quitando intervalo");
      clearInterval(id);
    };
  }, [run]);

  return (
    <div>
      <h3>{factorial}</h3>
      <button onClick={() => setRun(true)}>Start</button>
    </div>
  );
}

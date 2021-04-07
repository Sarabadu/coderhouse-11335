import React, { useContext, useState } from 'react';
import './App.css';
import { Child } from './components/Child';
import { MyDynamicContext, ContextoCart } from "./context/MyDynamicContext";


function App() {

  

  return (
    <div className="App">
        

        <MyDynamicContext>
            <Child></Child>
        </MyDynamicContext>

    </div>
  );
}

export default App;

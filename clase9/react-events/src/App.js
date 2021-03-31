import { useState } from 'react';
import './App.css';
import {Boxes} from './components/Boxes'
import { Input } from './components/Input';
import { ViewPort } from './components/ViewPort';

function App() {
  const [view,setView] =useState(true);

  return (
    <div className="App">
      {/* { view ?    
      
      <ViewPort></ViewPort>
      
      
      
      :
      null}


      <button onClick={    ()=>setView(   !view   )}> toggle</button>
      
      
       */}
      
      {/* <Boxes></Boxes> */}


      <Input></Input>


    </div>
  );
}

export default App;

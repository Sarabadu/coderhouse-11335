import logo from './logo.svg';
import './App.css';
import { MyComponent } from './components/MyComponent';
import { MemoComp2, MyComponent2 } from './components/MyComponent2';
import { useState } from 'react';

function App() {
  const [estado, setEstado] = useState(true);

  return (
    <div className="App">
      <header className="App-header">

       

       <MemoComp2 nombre={'estado'} propX={estado} ></MemoComp2>


        <button onClick={() => setEstado(!estado)}>toggle</button>
      </header>
    </div>
  );
}

export default App;

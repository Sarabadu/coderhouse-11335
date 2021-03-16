import "./App.css";
import FactorialComponent from "./components/FactorialComponent";
import FactorialContainer from "./components/FactorialContainer";
import RandomComponent from "./components/RandomComponent";
import RandomContainer from "./components/RandomContainer";
import SumComponent from "./components/SumComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <SumComponent /> */}

        {/* <FactorialComponent initial={8}></FactorialComponent> */}
        <FactorialContainer></FactorialContainer>
        {/* <RandomComponent></RandomComponent> */}
        {/* <RandomContainer /> */}
      </header>
    </div>
  );
}

export default App;

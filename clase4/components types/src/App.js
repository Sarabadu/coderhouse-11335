import "./App.css";
import ClassComp from "./components/class-comp";
import ClassStateFullComp from "./components/class-state-full-comp";
import ClassStateLessComp from "./components/class-state-less-comp";
import FunctionComp from "./components/function-comp";
import FunctionStateLessComp from "./components/function-state-less-comp";
import FunctionStateFullComp from "./components/funtion-state-full";
import { ShowCount } from "./components/show-count";

const App = () => {
  return (
    <div className="flex">
      {/* <ClassComp nombre="Pepe5" />
      <ClassComp nombre="Pepe2" />
      <ClassComp nombre="Pepe3" />
      <FunctionComp nombre="Juan" /> */}

      {/* <FunctionStateLessComp name="pepito">
        <ShowCount count={7} />
        <ShowCount count={7}>Hola como va</ShowCount>
        <ShowCount count={7} />
        <ShowCount count={7} />
      </FunctionStateLessComp> */}
      <ClassStateFullComp />
      <ClassStateFullComp />
      <ClassStateFullComp />
      <ClassStateFullComp />

      {/* <FunctionStateFullComp />
      <FunctionStateFullComp />
      <FunctionStateFullComp />
      <FunctionStateFullComp />
      <FunctionStateFullComp />
      <FunctionStateFullComp /> */}
    </div>
  );
};

export default App;

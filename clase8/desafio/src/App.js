import "./App.css";
import { NavBar } from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    
    <BrowserRouter >
      <div className="App">
    <NavBar />
        <Switch >
          <Route exact path='/'>
            Hola
          </Route>

          <Route  path='/category/:categoryId'>
              <ItemListContainer />
          </Route>


          <Route path='/item/:itemId/:otroId' >
              <ItemDetailContainer />
          </Route>

          <Route path='*' >
            404
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

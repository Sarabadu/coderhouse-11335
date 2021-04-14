import "./App.css";
import { NavBar } from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    
    <CartProvider>
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


          <Route path='/item/:itemId' >
              <ItemDetailContainer />
          </Route>


        </Switch>
      </div>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;

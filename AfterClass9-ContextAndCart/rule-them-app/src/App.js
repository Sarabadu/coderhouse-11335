import React from 'react';
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';

import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { CartProvider , CartContext } from './context/CartContext';
import { Cart } from './components/Cart';

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <CartContext.Consumer>
              {({cart}) => JSON.stringify(cart) }
          </CartContext.Consumer>
          <h2>Nav Bar</h2>
          
          <NavBar />
          
          <Switch>
            <Route exact path="/">
              <h2>Item List</h2>
              <ItemListContainer />
            </Route>

            <Route path="/category/:categoryId">
              <h2>Item List con Categoria</h2>
              <ItemListContainer />
            </Route>

            <Route path="/item/:itemId">
              <h2>Item Detail</h2>
              <ItemDetailContainer></ItemDetailContainer>
            </Route>

            <Route path="/cart">
              <h2>Estoy en el Cart</h2>
              <Cart />
            </Route>
          </Switch>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

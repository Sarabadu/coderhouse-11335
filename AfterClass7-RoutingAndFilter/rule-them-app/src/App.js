import React from 'react'
import './App.css';

import {BrowserRouter,Route,Switch} from 'react-router-dom'
import NavBar from './components/NavBar'

import {ItemListContainer} from './components/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer';

function App() {
  return (<>  
              <BrowserRouter>
              
                  <h2>Nav Bar</h2>
                  <NavBar />

                  <Switch>
                      <Route exact path='/' >
                          <h2>Item List</h2>
                          <ItemListContainer/>
                      </Route>

                      <Route path='/category/:categoryId' >
                          <h2>Item List con Categoria</h2>
                          <ItemListContainer/>
                      </Route>

                      <Route path='/item/:itemId' >
                        <h2>Item Detail</h2>
                        <ItemDetailContainer ></ItemDetailContainer>
                      </Route>
                  </Switch>              
              </BrowserRouter>
          </>


  );
}

export default App;

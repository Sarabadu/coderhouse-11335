import React from 'react'
import './App.css';

import NavBar from './components/NavBar'

import {ItemListContainer} from './components/ItemListContainer'

function App() {
  return (<>
               <NavBar />
               <h2>Las ofertas de la semana</h2>
               <ItemListContainer greeting="Hola Coders" a={4} b="chau"/>
          </>


  );
}

export default App;

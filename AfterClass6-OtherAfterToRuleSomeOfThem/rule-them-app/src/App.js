import React from 'react'
import './App.css';

import NavBar from './components/NavBar'

import {ItemListContainer} from './components/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer';

function App() {
  return (<>  
               <h2>Nav Bar</h2>
               <NavBar />

                <h2>Item Detail</h2>
               <ItemDetailContainer ></ItemDetailContainer>

               <h2>Item List</h2>
               <ItemListContainer greeting="Hola Coders" a={4} b="chau"/>
          </>


  );
}

export default App;

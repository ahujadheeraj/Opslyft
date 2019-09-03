import React from 'react';
import Home from './components/Home/Home'
import Miniwaste from './components/Miniwaste/Miniwaste'

import './App.css';
import {BrowserRouter,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">

    <Route exact path = "/" component = {Home} />
    <Route exact path = "/home" component = {Miniwaste} />

      </div>
    </BrowserRouter>
    

      
      
  );
}

export default App;

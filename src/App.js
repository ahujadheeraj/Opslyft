import React from 'react';
import Head from './assets/Path-838.svg'
import Laptop from './assets/Group-1744.svg'
import Leftline from './assets/Group395.svg'
import Header from './components/Header/Header'
import Client from './components/Clients/Clients'
import Services from './components/Services/Services'
import Process from './components/Process/Process'
import Metric from './components/Metric/Metric'
import Component from './components/Component/Component'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className = "Head">
        <img src = {Head} alt  = "head" />
        <div className = "Laptop">
        <img src = {Laptop} alt = "laptop"/>
        </div>
        <div className = "Leftline">
          <img src = {Leftline} alt = "line" />
        </div>
      </div>
      <div>
      <Header />
      </div>
      <div>
      <Client />
      <Services />
      <Process/>
      <Metric />
      <Component />

      </div>

      
      
    </div>
  );
}

export default App;

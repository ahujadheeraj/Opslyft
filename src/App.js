import React from 'react';
import Top from './components/Top/Top'
import Header from './components/Header/Header'
import Client from './components/Clients/Clients'
import Services from './components/Services/Services'
import Process from './components/Process/Process'
import Metric from './components/Metric/Metric'
import Component from './components/Component/Component'
import Footer from './components/Footer/Footer'
import Miniwaste from './components/Miniwaste/Miniwaste'
import White from './components/White/White'
import './App.css';

function App() {
  return (
    <div className="App">
      <Top/>
      <Header />
      <White/>
      <Client/>
      <Miniwaste />
      <Services />
      <Process/>
      <Metric />
      <Component />
      <Footer />

      </div>

      
      
  );
}

export default App;

import React from 'react';
import Top from '../Top/Top'
import Header from '../Header/Header'
import Client from '../Clients/Clients'
import Services from '../Services/Services'
import Process from '../Process/Process'
import Metric from '../Metric/Metric'
import Component from '../Component/Component'
import Footer from '../Footer/Footer'
import Miniwaste from '../Miniwaste/Miniwaste'
import White from '../White/White'
import './Home.css'


const home = (props) => (
    <div className = "home">
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
)

export default home;
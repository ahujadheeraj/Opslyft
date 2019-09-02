import React from 'react'
import './Top.css'
import Head from '../../assets/Path-838.svg'
import Laptop from '../../assets/illustartion.svg'
import Leftline from '../../assets/Group395.svg'
import LiveDemo from '../../assets/Group394.svg'
import Brand from '../../assets/logo.svg'


const top = (props) => (
    <div className = "top">
        <div className = "nav">
            <ul>
                <li><img src = {Brand} alt = "logo" /></li>
                <li><img src =  {LiveDemo} alt = "logo" /></li>
            </ul>

        </div>
        <div className = "Head">
            <img src = {Head} alt  = "head" />
        </div>

        <div className = "Laptop">
            <img src = {Laptop} alt = "laptop"/>
         </div>
        <div className = "Leftline">
            <img src = {Leftline} alt = "line" />
      </div>
    </div>
)

export default top;
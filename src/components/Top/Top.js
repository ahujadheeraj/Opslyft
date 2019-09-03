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
                
                <li><a href = "/"><img src = {Brand} alt = "logo"></img></a></li>
                <li><a href = "https://xd.adobe.com/view/f1a03b73-4295-4bc4-5e4c-5da9ede17e43-8791/screen/2fc9f87f-1243-4cfe-bf4c-7033607b2f27/Idle-Resource-management-EIP-5"><img src =  {LiveDemo} alt = "logo"></img></a></li>
            </ul>

        </div>
        <div className = "Head">
            <img src = {Head} alt  = "head" />
        </div>

        <div className = "Laptop">
            <img src = {Laptop} alt = "laptop"/>
         </div>

    </div>
)

export default top;
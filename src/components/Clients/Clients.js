import React from 'react';
import './Clients.css'
import clients from '../../assets/Clients.svg'
import line from '../../assets/Group1749.svg'
import mess from '../../assets/Group1787.svg'


const client = () => (

        <div className = "client">
            <div>
            <img src = {line} alt = "line"  />
            </div>
            <div>
            <img src = {clients} alt = "client"/>
            </div>
            <div>
            <img src = {mess} alt = "mess"/>
            </div>
        </div>

)

export default client;
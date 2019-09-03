import React from 'react';
import './Clients.css'
import clients from '../../assets/client.PNG'
import mess from '../../assets/mes.PNG'


const client = () => (

        <div className = "client">

            <div>
            <img src = {clients} alt = "client"/>
            </div>
            <div>
            <img src = {mess} alt = "mess"/>
            </div>
        </div>

)

export default client;
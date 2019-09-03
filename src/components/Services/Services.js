import React from 'react'
import './Services.css'
import oneg from '../../assets/1.gif'
import twog from '../../assets/2.gif'
import threeg from '../../assets/3.gif'



const billing = (props) => (
    <div>
        <div className = "headline">Upgrade to beta Customers</div>

        <div className = "billing-container grey">
            <div className = "billing-left">
                <img src  = {oneg} alt  = "feature" />

            </div>
            <div className = "billing-right billing-cont">
                <div className = "billing-first">
                    <div className = "billing-head">One Dashboard Cloud Management</div>
                    <div className = "billing-content"> 
                    Getting maximum value out of your cloud investment 
                    requires platform-independent cost analysis, comprehensive
                     cloud security and an infrastructure that’s audit-ready 
                     for the strictest regulatory standards.
                    </div>


                </div>
                
            </div>
        </div>
        <div className = "billing-container">
        <div className = "billing-right billing-cont">
                <div className = "billing-first">
                    <div className = "billing-head">One Dashboard Cloud Management</div>
                    <div className = "billing-content"> 
                    Getting maximum value out of your cloud investment 
                    requires platform-independent cost analysis, comprehensive
                     cloud security and an infrastructure that’s audit-ready 
                     for the strictest regulatory standards.
                    </div>
                </div> 
            </div>
            <div className = "billing-left">
                <img src  = {twog} alt  = "feature" />

            </div>

        </div>
        <div className = "billing-container grey">
            <div className = "billing-left">
                <img src  = {threeg} alt  = "feature" />

            </div>
            <div className = "billing-right billing-cont">
                <div className = "billing-first">
                    <div className = "billing-head">One Dashboard Cloud Management</div>
                    <div className = "billing-content"> 
                    Getting maximum value out of your cloud investment 
                    requires platform-independent cost analysis, comprehensive
                     cloud security and an infrastructure that’s audit-ready 
                     for the strictest regulatory standards.
                    </div>


                </div>
                
            </div>
        </div>


    </div>
        

)

export default billing
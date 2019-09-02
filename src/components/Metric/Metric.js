import React from 'react'
import './Metric.css'
import Quotes from '../../assets/quote.svg'
import Profile from '../../assets/Group1779.svg'
import Abhinav from '../../assets/abhinav.jpg'
import Comp from '../../assets/Group1778.svg'

const metric = (props) => (
    <div className = "m">
        <div className = "metric">
        <div className = "metric-left"> 
            <img src = {Abhinav} alt = "abhinav" width = "100%" 
            style ={{"border":"transparent",
                        "borderRadius": "5px",
                    "backgroundSize": "cover"}}/>     
        </div>
        <div className = "metric-right">
         
            <img src = {Quotes} alt = "66" width ="7%" style ={{"padding":"10px 30px 0px 40px"}}/>
            <div className = "metric-right-content">
             OpsLyft goes beyond the product and helps our engineers
             to build automated solutions which further reduces our 
             costs in terms of headcount as well. 
            </div>
            <img src = {Profile} alt = "profile" width = "65%" style ={{"padding-left":"50px"}}/>

            
        </div>   
    </div>


        <img src ={Comp} alt = "companies" width ="60%"/>     
    </div>

    
)

export default metric;
import React from 'react'
import './Footer.css'

const footer = (props) =>(

    <div className = "footer">
        <div className = "first">
            <div className = "firstone">
                opslyft
            </div>
            <div className = "firstsecond">
                <ul>
                    <li>ABOUT US</li>
                    <li>CONTACT US</li>
                
                </ul>


            </div>
            <div className = "firstthird">
                <ul> 
                    <li>PRODUCT</li>
                </ul>
   
            </div>
            <div className = "firstfour">
                <p style = {{fontSize:"20px"}}>INVITATION</p>
                <label >You can experience a FREE demo by subscribing to our list.</label>
                <br/>
                <form style = {{marginTop:"30px",width:"100%",display:"flex"}}>
                <input type = "email" placeholder = "Enter Email Address" />
                <input type = "submit" placeholder = "Subcribe" value = "Subcribe" />

                </form>
                

            </div>
        </div>

    </div>
)

export default footer
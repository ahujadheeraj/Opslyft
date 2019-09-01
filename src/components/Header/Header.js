import React from 'react'
import './Header.css'

const header = ()=>(
    <div className = "header">
        <div className = "header-title">
            WE SIMPLIFY DEVOPS FOR YOU
        </div>
        <div className = "header-content">
        The Fastest, easiest and the most secure Cloud Management platform to
        boost your Enterprise business unlike you've ever experienced...
        </div>
        <div >
            <form className = "header-form">
                <input type = "email" placeholder = "Enter Your Email Address" />
                <button>Request a Demo</button>    
            </form>
        </div> 
        <div className = "header-sub">
            <button>279</button>
            <label>Have already subscribed!</label>
        </div> 

    </div>

)
    

export default header;
import React from "react"
import logo from "../../logo.jpg"

import Button from '@material-ui/core/Button';
function Registration() {


    return (
<div className="maincontainer " style={{backgroundColor:"#cce3f5"}}>
        <div id="Registration">
            {/* <div class="loader"></div> */}
            </div>
            
            <div className="row pt-5">
            <div class="col-lg-4 col-md-8 col-sm-8"><img src={logo}></img></div>
            <div class="col-lg-4 col-md-8 col-sm-8">
            <div class="footer__newslatter">
            <h3 style={{fontFamily:"cursive"}}>Registration</h3>
            <form action="#">
            <div className="row pt-5 m-4">
            <input type="text" placeholder="First Name" className=""/>
            </div>
            <div className="row pt-5 m-4">
            <input type="text" placeholder="Last Name" className=""/>
            </div>
            <div className="row pt-5 m-4">
            <input type="text" placeholder="Email" className=""/>
            </div>
            <div className="row pt-5 m-4">
            <input type="password" placeholder="Password" className=""/>
            </div>
            <div className="row mb-5 ">
            <div className="col-7 text-end">
            <Button variant="contained" color="primary">
             Signin
            </Button>
            </div>
            </div>
            </form>
            <div class="footer__social">
            </div>
            </div>
            </div>
            </div>
            
            
       
        
      </div>)

}



export default Registration;
import React, { useState, useEffect } from 'react';
import Login from "./Login";
import Registration from "./Registration";
import facebook from "../../facebook.png";
import google from "../../google.jfif";

export default function SimpleTabs(props) {
    console.log("simple",props)

    const [alreadyHaveAccount, setalreadyHaveAccount] = useState(true);


    let matches= window.matchMedia("(max-width: 768px) and (min-width:10px)").matches
    const Changepage =()=>{
      console.log("simple")
      if(alreadyHaveAccount)
      setalreadyHaveAccount(false)
      else
      setalreadyHaveAccount(true)
      console.log(alreadyHaveAccount)
    }
    console.log(matches)

  return (
  <>
    <div className="row">
    <div className={!matches?"col-2":"col-0"}></div>
    <div className={!matches?" col-8":" col-12"}>
    <div className="ml-3 mr-3">
    <div style={{backgroundColor:"#ecb2c0"}}>
    <div className="row text-center" >

      </div>
    
        {alreadyHaveAccount ?
        <Login {...props}
        Changepage={Changepage}
        >
        </Login>

            :
    
        <Registration
        {...props}
        Changepage={Changepage}
        >
        </Registration>}
    
          </div>
          </div>
         </div>
    
         </div>
         <div className="row">
    <div className="col-2"></div>
    <div className="col-8">
           <div className="pt-3">________<b>Continue with</b> ________</div>
           </div></div>
           <div className="row">
    <div className="col-4"></div>
    <div className="col-2 ">
           <div className="pt-3"><img src={facebook}></img></div>
           </div>
           <div className="col-2">
           <div className="pt-3"><img src={google} ></img></div>
           </div>
           </div>
           
           <div className="row">
    <div className="col-2"></div>
    <div className="col-8">
           <div className="pt-3 text-dark"><b>By Clicking Signin You Agree With BerryBox <i className="text-warning">Terms and Conditions</i> And <i className="text-warning">Google Privacy</i></b></div>
           </div></div>
           
           
           </>
  );
}

import React, { useState, useEffect } from 'react';
import Login from "./Login";
import Registration from "./Registration";
import facebook from "../../facebook.png";
import google from "../../google.jfif";
export default function SimpleTabs(props) {
    console.log("simple",props)
    const [alreadyHaveAccount, setalreadyHaveAccount] = useState(true)
    const Changepage =(Truth)=>{
      console.log("simple")

      setalreadyHaveAccount(Truth)
    }


  let matches= window.matchMedia("(max-width: 768px) and (min-width:10px)").matches
  console.log(matches)
  return (
  <>
  <div class="container-fluid">
 
    <div className="row">
    <div className="col-3"></div>
      <div className={!matches?"card-body col-6":"card-body col-12"}>
      <div>
      <div className="row">
      <h3 className="col-6" style={{cursor:"pointer",fontFamily:"cursive",backgroundColor:!alreadyHaveAccount ?"#8cc3dd":"#cce3f5"}}  onClick={(e) => {
                  e.preventDefault();
                  Changepage(true);
                }}>Login</h3>
      <h3 className="col-6" style={{cursor:"pointer",fontFamily:"cursive",backgroundColor:!alreadyHaveAccount ?"#cce3f5":"#8cc3dd"}} onClick={(e) => {
                  e.preventDefault();
                  Changepage(false);
                }}>Registration</h3>
      </div>
      </div>
       
      {alreadyHaveAccount ?
        <div>
        <Login {...props}
        >
        </Login>
      </div>
      :
      <div>
        <Registration
        {...props}
        >
        </Registration>
      </div>}



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
           <div className="pt-3"><img src={google}></img></div>
           </div>
           </div>
           
           <div className="row">
    <div className="col-2"></div>
    <div className="col-8">
           <div className="pt-3 text-dark"><b>By Clicking Signin You Agree With BerryBox <i className="text-warning">Terms and Conditions</i> And <i className="text-warning">Google Privacy</i></b></div>
           </div></div>
    </div>
  
           </>
  );
}

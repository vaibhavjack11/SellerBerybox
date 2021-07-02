import React, { useState, useEffect } from "react"
import logo from "../../logo.jpg"
import { fire } from "../../Firebase";
import Button from '@material-ui/core/Button';
function Registration(props) {
    console.log(props)

    const call = () =>{console.log("aa")}
    const hello = (succ)=>{
        if(user){
        console.log(succ)
        props.history.push("/home")
        window.location.reload();
        }
        else{
            alert("signin failed")
        }
        }
        const [user, setUser] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [emailError, setEmailError] = useState("");
        const [passwordError, setPasswordError] = useState("");
        const [hasAccount, setHasAccount] = useState(false);
      
        const clearInputs = () => {
          setEmail("");
          setPassword("");
        };
      
        const clearErrors = () => {
          setEmailError("");
          setPasswordError("");
        };
      
        const handleLogin = () => {
          clearErrors();
          fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((succ) => hello(succ))
            .catch((err) => {
              switch (err.code) {
                case "auth/invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-found":
                  setEmailError(err.message);
                  console.log("user", err.message);
                  break;
                case "auth/wrong-password":
                  setEmailError(err.message);
                  console.log("password", err.message);
                  break;
                default:
                  setEmailError(err.message);
              }
            });
        };
        const handleLogout = () => {
          fire.auth().signOut();
        };
        const handleSignin = () => {
          clearErrors();
          fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch((err) => {
              switch (err.code) {
                case "auth/email-already-in-use":
                case "auth/invalid-email":
                  setEmailError(err.message);
                  break;
                case "auth/weak-password":
                  setPasswordError(err.message);
                  break;
                default:
                  setEmailError(err.message);
              }
            });
        };
      
        useEffect(() => {
          authListener();
        }, []);
      
        const authListener = () => {
          fire.auth().onAuthStateChanged((user) => {
            if (user) {
              clearInputs();
              setUser(user);
            } else {
              setUser("");
            }
          });
        };
      

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
            <div className="row pt-2 m-2">
            <input type="text" placeholder="First Name" className=""/>
            </div>
            <div className="row pt-2 m-2">
            <input type="text" placeholder="Last Name" className=""/>
            </div>
            <div className="row pt-2 m-2">
            <input type="text" placeholder="Email" className=""/>
            </div>
            <div className="row pt-2 m-2">
            <input type="password" placeholder="Password" className=""/>
            </div>
            <div className="row mb-5 ">
            <div className="col-7 text-end">
            <Button variant="contained" color="primary" onClick={handleSignin}>
             Signin
            </Button>
            </div>
            </div>
            <div className="row mb-2 pt-1">
            <div className="col-12">
            <label>
             already have account <a className="text-primary" style={{cursor:"pointer"}} onClick={(e) => {
                  e.preventDefault();
                  props.Changepage();
                }}>login</a>
            </label>
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
import React, { useState, useEffect } from "react"
import logo from "../../logo.jpg"
import { fire } from "../../Firebase";
function Login(props) {
    console.log(props)
    const hello = ()=>{
        if(user){
        props.history.push("/home")
        window.location.reload();
        }
        else{
            alert("Login failed")
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
            .then((succ) => console.log(succ))
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
        <div id="login">
            {/* <div class="loader"></div> */}
            </div>
            
            <div className="row pt-5">
            <div class="col-lg-4 col-md-8 col-sm-8"><img src={logo}></img></div>
            <div class="col-lg-4 col-md-8 col-sm-8">
            <div class="footer__newslatter">
            <h3 style={{fontFamily:"cursive"}}>Login</h3>
            <form action="#">
            <div className="row pt-3 m-2">
            <input type="text" placeholder="Email" className="" value={email}
                onChange={(e) => {
                e.preventDefault();
                props.setEmail(e.target.value);
              }}

            />
            </div>
            <div className="row pt-3 m-2">
            <input type="password" placeholder="Password" className="" value={password}
                onChange={(e) => {
                e.preventDefault();
                props.setPassword(e.target.value);
              }}

            />
            </div>

            <div className="row mb-5 pt-1">
            <div className="col-7">
            <button onClick={hello} className="btn btn text-white" style={{backgroundColor:"#0b3a6a"}} onClick={handleLogin} >
             Login
            </button>
            </div>
            </div>


            <div className="row ">
            <div className="col-12 text-end"> 
            <labal className="text-dark">forgot password? <a className="text-primary">Click Here</a></labal></div>

            </div>
            <div className="row mb-2 pt-1">
            <div className="col-12">
            <label>
             Create New Account <a className="text-primary" style={{cursor:"pointer"}} onClick={(e) => {
                  e.preventDefault();
                  props.Changepage();
                }}>Register</a>
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



export default Login;
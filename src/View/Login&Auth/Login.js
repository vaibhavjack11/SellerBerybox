import React from "react"
import logo from "../../logo.jpg"
import Button from '@material-ui/core/Button';
function Login(props) {
    console.log(props)
    const hello = ()=>{
        props.history.push("/home")
        window.location.reload();
        }

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
            <div className="row pt-5 m-4">
            <input type="text" placeholder="Email" className=""/>
            </div>
            <div className="row pt-5 m-4">
            <input type="password" placeholder="Password" className=""/>
            </div>
            <div className="row ">
            <div className="col-12 text-end"> 
            <labal className="text-dark">forgot password? <a className="text-primary">Click Here</a></labal></div>

            </div>
            <div className="row mb-5 pt-5">
            <div className="col-7">
            <Button onClick={hello} variant="contained" color="primary">
             Login
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



export default Login;
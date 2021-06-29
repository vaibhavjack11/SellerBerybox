import React from "react";
import Home from "../Model/Home";
import Tab from "../View/Login&Auth/Tab"
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
class MainPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 

    };

  }


 
  render() {
    return (
      <>



<Router>
      <div>
         <Route exact path="/" component={Tab} />
         <Route path="/home" component={Home} />
         {/* <Route path="/home" component={Home} /> */}
      </div>
   </Router>
        {/* <Home
        ></Home> */}
        {/* <Tab></Tab> */}

      </>
    );
  }
}
export default MainPageContainer;

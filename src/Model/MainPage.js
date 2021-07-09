import React from "react";
import Home from "../Model/Home";
import BusinessMAnagement from "../Model/BusinessMAnagement";
import Shops from "../Model/Shops";
import AddBusiness from "../Model/AddBusiness";
import AddItem from "../Model/AddItem";
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
      <div className="">

         <Route exact path="/" component={Tab} />
         <Route path="/home" component={Home} />
         <Route path="/businessMAnagement" component={BusinessMAnagement} />
         <Route path="/addBusiness" component={AddBusiness} />
         <Route path="/shops" component={Shops} />
         <Route path="/additem" component={AddItem} />

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

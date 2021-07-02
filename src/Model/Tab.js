import React from "react";
import Tab from "../View/Login&Auth/Tab";
class TabContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    };
  }

componentDidMount=()=>{

  console.log(this.props)
}
 
  render() {
    return (
      <>
        <Tab
        props={this.props}
        ></Tab>
      </>
    );
  }
}
export default TabContainer;

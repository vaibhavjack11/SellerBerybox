import React from "react";
import Shops from "../View/Shops";
class ShopsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 

    };

  }

  render() {
    return (
      <>
        <Shops
        {...this.props}
        ></Shops>
      </>
    );
  }
}
export default ShopsContainer;

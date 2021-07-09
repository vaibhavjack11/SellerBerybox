import React from "react";
import AddBusiness from "../View/AddBusiness";
class AddBusinessContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 

    };

  }

  render() {
    return (
      <>
        <AddBusiness
        {...this.props}
        ></AddBusiness>
      </>
    );
  }
}
export default AddBusinessContainer;

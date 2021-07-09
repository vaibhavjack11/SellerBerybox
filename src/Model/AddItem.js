import React from "react";
import AddItem from "../View/AddItem";
class AddItemContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 

    };

  }

  render() {
    return (
      <>
        <AddItem
        {...this.props}
        ></AddItem>
      </>
    );
  }
}
export default AddItemContainer;

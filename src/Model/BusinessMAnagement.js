import React from "react";
import Categories from "../View/BusinessManagement";
class CategoriesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 

    };

  }

  render() {
    return (
      <>
        <Categories
        {...this.props}
        ></Categories>
      </>
    );
  }
}
export default CategoriesContainer;

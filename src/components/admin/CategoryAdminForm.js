import React, { Component }  from 'react';

class CategoryAdminForm extends Component {
  constructor (props){
    super(props);
    this.state = {
      mainSelectedOption: null,
      subSelectedOption: null,
      thirdSelectedOption: null
    }
  }
  render() {
    return (
      <div className="category-admin-form">
      </div>
    )
  }
}

export default CategoryAdminForm;

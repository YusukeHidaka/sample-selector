import React, { Component } from 'react';
import CategoryAdminForm from './CategoryAdminForm.js';

class ForAdmin extends Component {
  state = {
    selectedOption: '',
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  }

  render() {
    return (
      <div className="for-admin">
        <h2>These forms are for Admin page</h2>
        <CategoryAdminForm />
      </div>
    );
  }
}

export default ForAdmin;

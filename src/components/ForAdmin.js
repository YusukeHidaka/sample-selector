import React, { Component } from 'react';

class ForAdmin extends Component {
  state = {
    selectedOption: '',
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  }

  render() {
    return (
      <div className="ForAdmin">
        <h2>These forms are for Admin page</h2>
      </div>
    );
  }
}

export default ForAdmin;

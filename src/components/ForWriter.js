import React, { Component } from 'react';
import CategoryForm from './CategoryForm.js';

class ForWriter extends Component {
  render() {
    return (
      <div className="ForWriter">
        <h2>These forms are for Writing page</h2>
        <h3>Set categories (Level is until 3)</h3>
        <CategoryForm />
        <h3>Add tags for article</h3>
      </div>
    );
  }
}

export default ForWriter;

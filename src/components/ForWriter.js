import React, { Component } from 'react';
import CategoryForm from './CategoryForm.js';
import TagForm from './TagForm.js';

class ForWriter extends Component {
  render() {
    return (
      <div className="ForWriter">
        <h2>These forms are for Writing page</h2>
        <CategoryForm />
        <TagForm />
      </div>
    );
  }
}

export default ForWriter;

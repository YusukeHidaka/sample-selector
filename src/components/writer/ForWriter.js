import React, { Component } from 'react';
import CategoryForm from './CategoryForm.js';
import TagForm from './TagForm.js';

class ForWriter extends Component {
  render() {
    return (
      <div className="for-writer">
        <h2>These forms are for Writer</h2>
        <CategoryForm />
        <TagForm />
      </div>
    );
  }
}

export default ForWriter;

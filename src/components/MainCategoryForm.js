import React, { Component }  from 'react';
import PropTypes from 'prop-types';

const FontAwesome = require('react-fontawesome');

class MainCategoryForm extends Component {
  constructor (props){
    super(props);
  }

  render() {
    const MAIN_CATEGORIES = this.props.MAIN_CATEGORIES;
    
    // Set oprions for main category
    let main_categories = [];
    for(var k in MAIN_CATEGORIES){
      main_categories.push(
        <li
          onClick={this.props.onClickMain}
          data-id={k}
          className={this.props.selectedItem == k ? "selected-main-cat" : ""}
        >
          <FontAwesome
            name={MAIN_CATEGORIES[k].icon}
            size='2x'
          />
          <br/>{MAIN_CATEGORIES[k].value}
        </li>
      );
    }

    return (
      <div>
        <h4>Main category</h4>
        <div className="category">
          <ul className="category-list">
            {main_categories}
          </ul>
        </div>
      </div>
    )
  }
}

export default MainCategoryForm;

MainCategoryForm.propTypes = {
  onClickMain: PropTypes.func,
  selectedItem: PropTypes.string,
};

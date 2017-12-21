import React, { Component }  from 'react';
import _ from 'lodash';
import Select from 'react-select';

const MAIN_CATEGORIES = require('../data/main_categories');
const SUB_CATEGORIES = require('../data/sub_categories');

class CategoryForm extends Component {
  constructor (props){
    super(props);
    this.state = {
      mainSelectedOption: null,
      subSelectedOption: null
    }
  }
  onChangeMain = (mainSelectedOption) => {
    this.setState({ mainSelectedOption });
  }

  onChangeSub = (subSelectedOption) => {
    this.setState({ subSelectedOption });
  }

  render() {
    let maincatValue = _.get(this.state, 'mainSelectedOption.value');
    const mainOptions = MAIN_CATEGORIES;
    let subOptions = SUB_CATEGORIES[maincatValue];

    let subcatPlaceholder='Choose main category first';
    if(maincatValue){
      subcatPlaceholder = 'Select ...';
    }

    return (
      <div className="category-form">
        <div className="category-selector">
          <h4>Main category</h4>
          <Select
            name="form-field-name"
            value={_.get(this.state, 'mainSelectedOption.value', '')}
            onChange={this.onChangeMain}
            options={mainOptions}
          />
          <h4>Sub category</h4>
          <Select
            name="form-field-name"
            value={_.get(this.state, 'subSelectedOption.value', '')}
            onChange={this.onChangeSub}
            options={subOptions}
            placeholder={subcatPlaceholder}
          />
          <h4>3rd category(if it exsists)</h4>
        </div>
      </div>
    );
  }
}

export default CategoryForm;

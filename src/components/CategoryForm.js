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
    let subcatValue = _.get(this.state, 'subSelectedOption.value');
    const mainOptions = MAIN_CATEGORIES;
    let subOptions = SUB_CATEGORIES[maincatValue];

    let subcatPlaceholder='Choose main category first';
    if(maincatValue){
      subcatPlaceholder = 'Select ...';
    }

    let url = '';
    if(!maincatValue){
      url = 'Choose main category / Choose sub category /';
    } else if (!subcatValue) {
      url = maincatValue + ' / Choose sub category /';
    } else {
      url = maincatValue + ' / ' + subcatValue + ' /'
    }

    return (
      <div className="category-form">
        <h3>Set categories (Level is until 2)</h3>
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
        <h3>URL is gonna be: <span>/ article / {url} article_title</span></h3>
      </div>
    );
  }
}

export default CategoryForm;

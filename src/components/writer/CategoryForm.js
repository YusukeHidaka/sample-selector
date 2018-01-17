import React, { Component }  from 'react';
import _ from 'lodash';
import Select from 'react-select';
import $ from 'jquery';
import MainCategoryForm from './MainCategoryForm.js';

const MAIN_CATEGORIES = require('../../data/main_categories');
const SUB_CATEGORIES = require('../../data/sub_categories');

class CategoryForm extends Component {
  constructor (props){
    super(props);
    this.state = {
      mainSelectedOption: null,
      subSelectedOption: null,
    }
  }

  onClickMain = (event) => {
    // When same category is already selected...
    if (this.state.selectedItem == event.currentTarget.dataset.id) {
      this.setState({ selectedItem: null });
      this.setState({ mainSelectedOption: null});
    } else {
      this.setState({ selectedItem: event.currentTarget.dataset.id });
      this.setState({ mainSelectedOption: MAIN_CATEGORIES[event.currentTarget.dataset.id] });
    }
    this.setState({ subSelectedOption: null });
  }

  onChangeSub = (subSelectedOption) => {
    this.setState({ subSelectedOption });
  }


  render() {
    // Set value to selector
    let maincatValue = _.get(this.state, 'mainSelectedOption.value');
    let subcatValue = _.get(this.state, 'subSelectedOption.value');

    // Set options for sub, third selector
    let subOptions = SUB_CATEGORIES[maincatValue];

    // Define abled args
    let subDisabled = true;

    // Handle placeholder depending on parent category
    let subcatPlaceholder='Choose main category first';
    if(maincatValue){
      subcatPlaceholder = 'Select sub category of ' + maincatValue + '...';
      subDisabled = false;
    }

    // Render urls according to selected options
    // For now, only area/mrt has third categories.
    let url = '';
    if(!maincatValue){
      url = '{ Choose main category } / { Choose sub category } /';
    } else if (!subcatValue) {
      url = maincatValue + ' / { Choose sub category } /';
    } else {
      url = maincatValue + ' / ' + subcatValue + ' /'
    }

    return (
      <div className="category-form form-group">
        <h3>Set categories</h3>
        <div className="category-selector">
          <MainCategoryForm
            selectedItem={this.state.selectedItem}
            onClickMain={this.onClickMain.bind(this)}
            MAIN_CATEGORIES={MAIN_CATEGORIES}
          />
          <h4>Sub category</h4>
          <Select
            name="sub-cat-selector"
            value={_.get(this.state, 'subSelectedOption.value', '')}
            onChange={this.onChangeSub}
            options={subOptions}
            placeholder={subcatPlaceholder}
            disabled={subDisabled}
          />
        </div>
        <p>URL : <span>https://www.estopolis.com / article / {url} article_title</span></p>
      </div>
    );
  }
}

export default CategoryForm;

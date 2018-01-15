import React, { Component }  from 'react';
import _ from 'lodash';
import Select from 'react-select';
import $ from 'jquery';

const MAIN_CATEGORIES = require('../data/main_categories');
const SUB_CATEGORIES = require('../data/sub_categories');
const THIRD_CATEGORIES = require('../data/third_categories');
const FontAwesome = require('react-fontawesome');


class CategoryForm extends Component {
  constructor (props){
    super(props);
    this.state = {
      mainSelectedOption: null,
      subSelectedOption: null,
      thirdSelectedOption: null
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
    this.setState({ thirdSelectedOption: null });
  }

  onChangeSub = (subSelectedOption) => {
    this.setState({ subSelectedOption });
    this.setState({ thirdSelectedOption: null });
  }

  onChangeThird = (thirdSelectedOption) => {
    this.setState({ thirdSelectedOption });
  }

  render() {
    // Set value to selector
    let maincatValue = _.get(this.state, 'mainSelectedOption.value');
    let subcatValue = _.get(this.state, 'subSelectedOption.value');
    let thirdcatValue = _.get(this.state, 'thirdSelectedOption.value');

    // Set oprions for main category
    let main_categories = [];
    for(var k in MAIN_CATEGORIES){
      main_categories.push(
        <li
          onClick={this.onClickMain}
          data-id={k}
          className={this.state.selectedItem == k ? "selected-main-cat" : ""}
        >
          <FontAwesome
            name={MAIN_CATEGORIES[k].icon}
            size='2x'
          />
          <br/>{MAIN_CATEGORIES[k].value}
        </li>
      );
    }

    // Set options for sub, third selector
    let subOptions = SUB_CATEGORIES[maincatValue];
    let thirdOptions = THIRD_CATEGORIES[subcatValue];

    // Define abled args
    let subDisabled = true;
    let thirdDisabled = true;

    // Handle placeholder depending on parent category
    let subcatPlaceholder='Choose main category first';
    if(maincatValue){
      subcatPlaceholder = 'Select ...';
      subDisabled = false;
    }

    let thirdcatPlaceholder='Choose sub category';
    if(subcatValue){
      if (thirdOptions) {
        thirdcatPlaceholder = 'Select ...';
        thirdDisabled = false;
      } else {
        thirdcatPlaceholder = "This subcategory doesn't have 3rd category";
      }
    }

    // Render urls according to selected options
    // For now, only area/mrt has third categories.
    let url = '';
    if(!maincatValue){
      url = '{ Choose main category } / { Choose sub category } / { Choose third category } /';
    } else if (!subcatValue) {
      url = maincatValue + ' / { Choose sub category } / { Choose third category } /';
    } else if (thirdcatValue) {
        url = maincatValue + ' / ' + subcatValue + ' / ' + thirdcatValue + ' /'
    } else {
      url = maincatValue + ' / ' + subcatValue + ' /'
    }

    return (
      <div className="category-form form-group">
        <h3>Set categories (Level is until 2 or 3? not sure)</h3>
        <div className="category-selector">
          <h4>Main category</h4>
          <div className="category">
            <ul className="category-list">
              {main_categories}
            </ul>
          </div>
          <h4>Sub category</h4>
          <Select
            name="sub-cat-selector"
            value={_.get(this.state, 'subSelectedOption.value', '')}
            onChange={this.onChangeSub}
            options={subOptions}
            placeholder={subcatPlaceholder}
            disabled={subDisabled}
          />
          <h4>third category(if it exsists. For now, only area/mrt has third categories.)</h4>
          <Select
            name="third-cat-selector"
            value={_.get(this.state, 'thirdSelectedOption.value', '')}
            onChange={this.onChangeThird}
            options={thirdOptions}
            placeholder={thirdcatPlaceholder}
            disabled={thirdDisabled}
          />
        </div>
        <p>URL : <span>https://www.estopolis.com / article / {url} article_title</span></p>
      </div>
    );
  }
}

export default CategoryForm;

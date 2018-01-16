import React, { Component }  from 'react';
import _ from 'lodash';
import Select from 'react-select';

const TAG_GROUPS = require('../../data/tag_groups');
const TAGS = require('../../data/tags');

class TagForm extends Component {
  constructor (props){
    super(props);
    this.state = {
      removeSelected: true,
			disabled: false,
			stayOpen: false,
			value: [],
      // should replace those states with array or hash objects
      displayAll: true,
      displayMRT: true,
      displayBTS: true,
      displayStyleRoom: true,
      displayFurniture: true,
      displayRoom: true,
      displayDecoration: true
    }
  }

  handleSelectChange (value) {
		console.log('You\'ve selected:', value);
		this.setState({ value });
	}

	toggleCheckbox (e) {
    console.log(e.target.name);
    console.log(e.target.checked);
    if(e.target.name=="displayAll" && e.target.checked){
      // Check every box
    }
		this.setState({
			[e.target.name]: e.target.checked,
		});
	}

  gotoTagsArticles (e) {
    console.log(e);
    // Writer can check articles of specific tag
		window.open('https://estopolis.com/article/tag/' + e.value);
	}

  render() {
    const tag_group_options = TAG_GROUPS;
    const tag_options = TAGS;

    const { disabled, stayOpen, value } = this.state;
    return (
      <div className="tag-form">
        <h3>Add tags for article (Limit is 10 or something?)</h3>

        <div className="tag_group_options">
          <h4>Check tag group (you can filter the options of tag) <span> [pending]</span></h4>
          <label className="checkbox">
						<input type="checkbox" className="checkbox-control master-checkbox" name="displayAll" checked={this.state.displayAll} onChange={this.toggleCheckbox.bind(this)} />
						<span className="checkbox-label">Display all tags</span>
					</label>
          <label className="checkbox">
            <input type="checkbox" className="checkbox-control" name="displayMRT" checked={this.state.displayMRT} onChange={this.toggleCheckbox.bind(this)} />
            <span className="checkbox-label">Display MRT group tags</span>
          </label>
          <label className="checkbox">
            <input type="checkbox" className="checkbox-control" name="displayBTS" checked={this.state.displayBTS} onChange={this.toggleCheckbox.bind(this)} />
            <span className="checkbox-label">Display BTS group tags</span>
          </label>
          <label className="checkbox">
            <input type="checkbox" className="checkbox-control" name="displayStyleRoom" checked={this.state.displayStyleRoom} onChange={this.toggleCheckbox.bind(this)} />
            <span className="checkbox-label">Display StyleRoom group tags</span>
          </label>
          <label className="checkbox">
            <input type="checkbox" className="checkbox-control" name="displayFurniture" checked={this.state.displayFurniture} onChange={this.toggleCheckbox.bind(this)} />
            <span className="checkbox-label">Display Furniture group tags</span>
          </label>
          <label className="checkbox">
            <input type="checkbox" className="checkbox-control" name="displayRoom" checked={this.state.displayRoom} onChange={this.toggleCheckbox.bind(this)} />
            <span className="checkbox-label">Display Room group tags</span>
          </label>
          <label className="checkbox">
            <input type="checkbox" className="checkbox-control" name="displayDecoration" checked={this.state.displayDecoration} onChange={this.toggleCheckbox.bind(this)} />
            <span className="checkbox-label">Display Decoration group tags</span>
          </label>

        </div>

        <div className="tag-selector">
          <hr />
          <h4>Tag selector (main form)</h4>
          <Select
  					closeOnSelect={!stayOpen}
  					disabled={disabled}
  					multi
  					onChange={this.handleSelectChange.bind(this)}
  					options={tag_options}
  					placeholder="Select your tags"
            removeSelected={this.state.removeSelected}
  					simpleValue
  					value={value}
            onValueClick={this.gotoTagsArticles}
  				/>
        </div>

        <div className="checkbox-list options">
          <h4>Options</h4>
					<label className="checkbox">
						<input type="checkbox" className="checkbox-control" name="removeSelected" checked={this.state.removeSelected} onChange={this.toggleCheckbox.bind(this)} />
						<span className="checkbox-label">Remove selected options</span>
					</label>
					<label className="checkbox">
						<input type="checkbox" className="checkbox-control" name="disabled" checked={this.state.disabled} onChange={this.toggleCheckbox.bind(this)} />
						<span className="checkbox-label">Disable the control</span>
					</label>
					<label className="checkbox">
						<input type="checkbox" className="checkbox-control" name="stayOpen" checked={stayOpen} onChange={this.toggleCheckbox.bind(this)}/>
						<span className="checkbox-label">Stay open when an Option is selected</span>
					</label>
				</div>
      </div>
    )
  }
}

export default TagForm;

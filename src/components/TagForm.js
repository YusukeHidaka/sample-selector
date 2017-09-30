import React, { Component }  from 'react';
import _ from 'lodash';
import Select from 'react-select';

const TAG_GROUPS = require('../data/tag_groups');
const TAGS = require('../data/tags');

class TagForm extends Component {
  constructor (props){
    super(props);
    this.state = {
      removeSelected: true,
			disabled: false,
			stayOpen: false,
			value: []
    }
  }

  handleSelectChange (value) {
		console.log('You\'ve selected:', value);
		this.setState({ value });
	}
	toggleCheckbox (e) {
		this.setState({
			[e.target.name]: e.target.checked,
		});
	}

  render() {
    const tag_group_options = TAG_GROUPS;
    const tag_options = TAGS;

    const { disabled, stayOpen, value } = this.state;
    return (
      <div className="tag-form">
        <h3>Add tags for article (Limit is 10 or something?)</h3>
        <Select
					closeOnSelect={!stayOpen}
					disabled={disabled}
					multi
					onChange={this.handleSelectChange.bind(this)}
					option={tag_options}
					placeholder="Select your tags"
          removeSelected={this.state.removeSelected}
					simpleValue
					value={value}
				/>

        <div className="checkbox-list">
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

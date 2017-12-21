import React from 'react';
import Select from 'react-select';

class CategoryForm extends React.Component {
  state = {
    selectedOption: '',
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);
  }
  render() {
    return (
      <Select
        name="form-field-name"
        value={this.state.selectedOption.value}
        onChange={this.handleChange}
        multi={true}
        options={[
          { value: 'one', label: 'One' },
          { value: 'two', label: 'Two' },
        ]}
      />
    );
  }
}

export default CategoryForm;

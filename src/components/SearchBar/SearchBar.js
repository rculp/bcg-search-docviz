import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

import './SearchBar.scss';

class SearchBar extends Component {
  onSubmit = () => {
    const { submitHandler } = this.props;
    submitHandler();
  };

  handleChange = (event) => {
    const { changeHandler } = this.props;
    changeHandler(event.target.value);
  };

  render = () => {
    const { searchValue, isLoading, isDisabled } = this.props;
    return (
      <Input
        size="massive"
        placeholder="Search..."
        id="query"
        loading={isLoading}
        disabled={isDisabled}
        value={searchValue}
        onChange={this.handleChange}
        icon="search"
        iconPosition="left"
        label={<Button type="submit" onClick={this.onSubmit}>Submit</Button>}
        labelPosition="right"
      />
    );
  };
}

SearchBar.propTypes = {
  searchValue: PropTypes.string,
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  changeHandler: PropTypes.func.isRequired,
  submitHandler: PropTypes.func.isRequired
};

SearchBar.defaultProps = {
  searchValue: '',
  isLoading: false,
  isDisabled: false
};

export default SearchBar;

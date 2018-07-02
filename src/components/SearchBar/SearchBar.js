import React from 'react';
import PropTypes from 'prop-types';

import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

import './SearchBar.scss';

class SearchBar {
  handleChange = (event) => {
    const { changeHandler } = this.props;
    changeHandler(event.target.value);
  };

  fetchResults = () => {
    const { actions: { search }, searchValue } = this.props;
    search(searchValue);
  };

  render = () => {
    const { searchValue, isLoading } = this.props;
    return (
      <Input
        size="massive"
        placeholder="Search..."
        id="query"
        loading={isLoading}
        disabled={isLoading}
        value={searchValue}
        onChange={this.handleChange}
        icon="search"
        iconPosition="left"
        label={<Button type="submit" onClick={this.fetchResults}>Submit</Button>}
        labelPosition="right"
      />
    );
  };
}

SearchBar.propTypes = {
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  changeHandler: PropTypes.func.isRequired
};

SearchBar.defaultProps = {
  isLoading: false,
  isDisabled: false
};

export default SearchBar;

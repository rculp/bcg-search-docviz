import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';

import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

import './SearchBar.scss';

class SearchBar extends Component {
  handleChange = (event) => {
    const { changeHandler } = this.props;
    changeHandler(event.target.value);
  };

  fetchResults = () => {
    const { submitHandler, searchValue } = this.props;
    submitHandler(searchValue);
  };

  render = () => {
    const { searchValue, isLoading, isDisabled } = this.props;
    return (
      <Input
        size="massive"
        placeholder="Try to be as descriptive as possible"
        id="query"
        disabled={isDisabled}
        value={searchValue}
        onChange={this.handleChange}
        icon="search"
        iconPosition="left"
        label={
          <Button icon className="searchButton" type="submit" onClick={this.fetchResults}>
            {
              isLoading ? <div className="iconContainer loadIcons"><Icon name="circle" className="left" /><Icon name="circle" className="middle" /><Icon name="circle" className="right" /></div> : <div className="iconContainer searchIcon"><Icon name="arrow right" /></div>
            }
          </Button>
          }
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

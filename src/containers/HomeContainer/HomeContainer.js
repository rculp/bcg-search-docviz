import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Input } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as searchActions, selectors as searchSelectors } from 'redux/search';

import './HomeContainer.css';

class HomeContainer extends Component {
  handleChange = (event) => {
    const { actions: { changeSearchValue } } = this.props;
    changeSearchValue(event.target.value);
    // this.query();
  };

  // query = debounce(() => {
  //  sdk.search.basicQuery(this.state.value).then((response) => {
  //    this.setState({ response: response.Result.Docs });
  //  });
  //  sdk.search.suggest(this.state.value).then((response) => {
  //    this.setState({ suggestion: response.Suggests });
  //  });
  // }, 750);

  render = () => (
    <div className="page">
      <Link to="/results">Results</Link>
      <main>
        <form>
          <label htmlFor="nameInput">
              Name:
            <Input placeholder="Search..." id="nameInput" onChange={this.handleChange} />
          </label>
        </form>
        {this.props.searchValue}
      </main>
    </div>
  );
}

const mapStateToProps = state => ({
  searchValue: searchSelectors.getSearchValue(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...searchActions }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

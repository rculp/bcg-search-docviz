import './HomePage.css';

import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Input } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class HomeContainer extends Component {

  handleChange = (event) => {
    //actions.setSearchValue(event.target.value);
    //this.query();
  };

  //query = debounce(() => {
  //  sdk.search.basicQuery(this.state.value).then((response) => {
  //    this.setState({ response: response.Result.Docs });
  //  });
  //  sdk.search.suggest(this.state.value).then((response) => {
  //    this.setState({ suggestion: response.Suggests });
  //  });
  //}, 750);

  render = () => {
    return (
      <div className="page">
        <Link to="/results">Results</Link>
        <main>
          <form>
            <label>
              Name:
              <Input placeholder="Search..." value={this.props.searchValue} onChange={this.handleChange} />
            </label>
          </form>
        </main>
      </div>
    );
  };

}

const mapStateToProps = (state, ownProps) => ({
  //searchValue: selectors.getSearchValue(state)
});

const mapDispatchToProps = dispatch => ({
  //actions: bindActionCreators({ ...actions }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
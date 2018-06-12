import './HomeContainer.css';

import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as searchActions, selectors as searchSelectors } from 'redux/search';
import { push } from 'connected-react-router'

import Page from 'components/Page/Page';

import sdk from 'sinequa-sdk';

class HomeContainer extends Component {

  fetchResults = () => {
    const { actions: { changeLoading, changeResults }, searchValue } = this.props;

    changeLoading(true);
    sdk.search.basicQuery(searchValue).then((response) => {
      changeLoading(false); //TODO make page change always set loading to false?
      changeResults(response);
      push('/results');
    });
  };

  handleChange = (event) => {
    const { actions: { changeSearchValue } } = this.props;
    changeSearchValue(event.target.value);
  };

  render = () => {
    const { loading } = this.props;
    return (
      <Page id="home">
        <main>
          <h2>Sinequa Search</h2>
          <Form>
            <Form.Field>
              <Input
                placeholder="Search..."
                id="query"
                loading={loading}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Button type="submit" onClick={this.fetchResults}>Submit</Button>
          </Form>
        </main>
      </Page>
    )
  };
}

const mapStateToProps = state => ({
  searchValue: searchSelectors.getSearchValue(state),
  loading: searchSelectors.getLoading(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...searchActions }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

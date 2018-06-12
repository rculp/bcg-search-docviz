import React, { Component } from 'react';

import { Form, Input, Button } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as searchActions, selectors as searchSelectors } from 'redux/search';

import Page from 'components/Page/Page';

import './HomeContainer.css';

class HomeContainer extends Component {
  componentDidUpdate = () => {
    const { history, shouldRedirect } = this.props;
    if (shouldRedirect) {
      history.push('/results');
    }
  };

  fetchResults = () => {
    const { actions: { search }, searchValue } = this.props;
    search(searchValue);
  };

  handleChange = (event) => {
    const { actions: { changeSearchValue } } = this.props;
    changeSearchValue(event.target.value);
  };

  render = () => {
    const { searchValue, loading } = this.props;
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
                value={searchValue}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Button type="submit" onClick={this.fetchResults}>Submit</Button>
          </Form>
        </main>
      </Page>
    );
  };
}

const mapStateToProps = state => ({
  searchValue: searchSelectors.getSearchValue(state),
  loading: searchSelectors.getLoading(state),
  error: searchSelectors.getError(state),
  shouldRedirect: searchSelectors.getShouldRedirect(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...searchActions }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

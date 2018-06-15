import React, { Component } from 'react';

import { Form, Input, Button, Message } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as searchActions, selectors as searchSelectors } from 'redux/search/search';

import Page from 'components/Page/Page';

import './Home.css';

class HomeContainer extends Component {
  componentDidUpdate = () => {
    const { history, shouldRedirect, searchValue } = this.props;
    if (shouldRedirect) {
      history.push(`/results?q=${encodeURIComponent(searchValue)}`);
    }
  };

  componentWillUnmount = () => {
    const { actions: { reset } } = this.props;
    reset();
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
    const { searchValue, loading, error } = this.props;
    return (
      <Page id="home">
        <main>
          <h2>Sinequa Search</h2>
          <Form>
            <Form.Field>
              <Input
                size="massive"
                placeholder="Search..."
                id="query"
                loading={loading}
                disabled={loading}
                value={searchValue}
                onChange={this.handleChange}
                icon="search"
                iconPosition="left"
                label={<Button type="submit" onClick={this.fetchResults}>Submit</Button>}
                labelPosition="right"
              />
            </Form.Field>
          </Form>
          { error &&
            <Message
              error
              header="Search Failed"
              content="It's not your fault! We're experiencing technical issues. Please try again in a few minutes."
            />
          }
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

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'react-flexbox-grid';
import { actions as searchActions, selectors as searchSelectors } from 'redux/search/search';
import { UI_URL } from 'config';

import Page from 'components/Page/Page';
import Form from 'components/Form/Form';
import Message from 'components/Message/Message';
import SearchBar from 'components/SearchBar/SearchBar';

import './Home.scss';

export class HomeContainer extends Component {
  componentDidUpdate = () => {
    const { history, shouldRedirect, searchValue } = this.props;
    if (shouldRedirect) {
      history.push(UI_URL.RESULTS(searchValue));
    }
  };

  componentWillUnmount = () => {
    const { actions: { reset } } = this.props;
    reset();
  };

  render = () => {
    const {
      actions: { changeSearchValue, search }, searchValue, loading, error, errorMessage
    } = this.props;
    return (
      <Page id="home">
        <Row>
          <Col xs={12} lg={8} lgOffset={2}>
            <h2>I am looking for:</h2>
            <Form>
              <Form.Field>
                <SearchBar
                  isLoading={loading}
                  isDisabled={loading}
                  searchValue={searchValue}
                  changeHandler={changeSearchValue}
                  submitHandler={search}
                />
              </Form.Field>
            </Form>
            {
              error &&
              <Message
                error
                header="Search Failed"
                content={errorMessage}
              />
            }
          </Col>
        </Row>
      </Page>
    );
  };
}

const mapStateToProps = state => ({
  searchValue: searchSelectors.getSearchValue(state),
  loading: searchSelectors.getLoading(state),
  error: searchSelectors.getError(state),
  errorMessage: searchSelectors.getErrorMessage(state),
  shouldRedirect: searchSelectors.getShouldRedirect(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...searchActions }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

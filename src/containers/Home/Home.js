import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'react-flexbox-grid';
import { actions as searchActions, selectors as searchSelectors } from 'redux/search/search';
import { UI_URL } from 'config';

import Page from 'components/Page/Page';
import Loader from 'components/Loader/Loader';
import Form from 'components/Form/Form';
import Message from 'components/Message/Message';
import SearchBar from 'components/SearchBar/SearchBar';

import './Home.scss';

export class HomeContainer extends Component {
  submitHandler = () => {
    const { actions: { search }, searchValue, history } = this.props;
    search(searchValue, true).then(() => {
      history.push(UI_URL.RESULTS(searchValue));
    });
  };

  render = () => {
    const {
      actions: { changeSearchValue }, searchValue, loading, error, errorMessage
    } = this.props;
    return (
      <Page id="home">
        <Row>
          <Col xs={12} lg={6} lgOffset={3}>
            <h2>Sinequa Search</h2>
            <Form>
              <Form.Field>
                <SearchBar
                  isLoading={loading}
                  isDisabled={loading}
                  searchValue={searchValue}
                  changeHandler={changeSearchValue}
                  submitHandler={this.submitHandler}
                  redirectOnSuccess
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
        <Loader size="large" active={loading}>Loading</Loader>
      </Page>
    );
  };
}

const mapStateToProps = state => ({
  searchValue: searchSelectors.getSearchValue(state),
  loading: searchSelectors.getLoading(state),
  error: searchSelectors.getError(state),
  errorMessage: searchSelectors.getErrorMessage(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...searchActions }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

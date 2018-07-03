import React, { Component, Fragment } from 'react';
import uuid from 'uuid/v1';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'react-flexbox-grid';
import { actions as searchActions, selectors as searchSelectors } from 'redux/search/search';
import ReactHtmlParser from 'react-html-parser';
import { UI_URL } from 'config';

import Heading from 'components/Heading/Heading';
import Loader from 'components/Loader/Loader';
import Card from 'components/Card/Card';
import Message from 'components/Message/Message';
import Form from 'components/Form/Form';
import SearchBar from 'components/SearchBar/SearchBar';

import Page from 'components/Page/Page';

import './Results.scss';

export class ResultsContainer extends Component {
  componentDidMount = () => {
    const { actions: { search, changeSearchValue }, history } = this.props;
    let q = new URL(window.location).searchParams.get('q');
    changeSearchValue(q);
    document.title = `Results${q && ` | ${q}`}`;
    search(q);
    this.historyUnlistener = history.listen(() => {
      q = new URL(window.location).searchParams.get('q');
      changeSearchValue(q);
      document.title = `Results${q && ` | ${q}`}`;
      search(q);
    });
  };

  componentWillUnmount = () => {
    this.historyUnlistener();
  };

  submitHandler = () => {
    const {
      actions: { search }, searchValue, lastTermSearched, history
    } = this.props;
    search(searchValue, lastTermSearched).then(() => history.push(UI_URL.RESULTS(searchValue)));
  };

  render = () => {
    const {
      actions: { changeSearchValue },
      results,
      searchValue,
      loading,
      error,
      errorMessage,
      empty
    } = this.props;

    return (
      <Page id="results">
        <Row>
          <Col xs={12} lg={6} lgOffset={3}>
            <Form>
              <Form.Field>
                <SearchBar
                  isLoading={loading}
                  isDisabled={loading}
                  searchValue={searchValue}
                  changeHandler={changeSearchValue}
                  submitHandler={this.submitHandler}
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
            {
              empty &&
              <Message header="No Results Found" content="Please try a different search." />
            }
          </Col>
        </Row>
        {
          !empty && !error &&
          <Fragment>
            <Loader size="large" active={loading}>Loading</Loader>
            {
              !loading &&
              <Fragment>
                <Heading className="resultCount" as="h2">Showing 1 - {results.length} of {results.totalHitCount} results found</Heading>
                <Row>
                  <Col xs={12} lg={8}>
                    {
                      results.map(doc => (
                        <Card key={uuid()} fluid color="green">
                          <Card.Content>
                            <Card.PracticeArea practiceAreas={doc.industryPA} />
                            <Card.MatchPercentage relevancyScore={doc.relevancyScore} />
                            <Card.Header>{doc.title}</Card.Header>
                            <Card.Meta>UPDATED: {new Date(doc.uploadDate).toLocaleDateString()}</Card.Meta>
                            <Card.Description>{ReactHtmlParser(doc.smallSummaryHtml)}</Card.Description>
                          </Card.Content>
                        </Card>
                      ))
                    }
                  </Col>
                </Row>
              </Fragment>
            }
          </Fragment>
        }
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  results: searchSelectors.getResults(state),
  searchValue: searchSelectors.getSearchValue(state),
  loading: searchSelectors.getLoading(state),
  error: searchSelectors.getError(state),
  errorMessage: searchSelectors.getErrorMessage(state),
  empty: searchSelectors.getEmpty(state),
  lastTermSearched: searchSelectors.getLastTermSearched(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...searchActions }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultsContainer);

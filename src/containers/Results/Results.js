import React, { Fragment } from 'react';
import uuid from 'uuid/v1';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'react-flexbox-grid';
import { actions as searchActions, selectors as searchSelectors } from 'redux/search/search';
import ReactHtmlParser from 'react-html-parser';

import Heading from 'components/Heading/Heading';
import Loader from 'components/Loader/Loader';
import Card from 'components/Card/Card';
import Message from 'components/Message/Message';
import Form from 'components/Form/Form';
import SearchBar from 'components/SearchBar/SearchBar';

import Page from 'components/Page/Page';

import './Results.scss';

export const ResultsContainer = ({
  actions: { changeSearchValue, search },
  history,
  results,
  searchValue,
  loading,
  error,
  empty
}) => {
  if (!results.results) {
    history.push('/');
    return null;
  }

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
                submitHandler={search}
              />
            </Form.Field>
          </Form>
        </Col>
      </Row>
      {
        error &&
        <Message
          error
          header="Search Failed"
          content="It's not your fault! We're experiencing technical issues. Please try again in a few minutes."
        />
      }
      {
        empty &&
        <Message header="No Results Found" content="Please try a different search." />
      }
      {
        !empty &&
        <Fragment>
          <Heading className="resultCount" as="h2">Showing 1 - {results.results.length} of {results.totalHitCount} results found</Heading>
          {
            loading &&
            <Loader size="large">Loading</Loader>
          }
          {
            !loading &&
            <Row>
              <Col xs={12} lg={8}>
                {
                  results.results.map(doc => (
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
          }
        </Fragment>
      }
    </Page>
  );
};

const mapStateToProps = state => ({
  results: searchSelectors.getResults(state),
  searchValue: searchSelectors.getSearchValue(state),
  loading: searchSelectors.getLoading(state),
  error: searchSelectors.getError(state),
  empty: searchSelectors.getEmpty(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...searchActions }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultsContainer);

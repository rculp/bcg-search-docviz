import React, { Fragment } from 'react';
import uuid from 'uuid/v1';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as searchActions, selectors as searchSelectors } from 'redux/search/search';
import ReactHtmlParser from 'react-html-parser';

import Heading from 'components/Heading/Heading';
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
  error
}) => {
  if (!results.results) {
    history.push('/');
    return null;
  }
  return (
    <Page id="results">
      {
        results.results.length <= 0 &&
        <Message header="No Results Found" content="Please try a different search." />
      }
      {
        results.results.length > 0 &&
        <Fragment>
          <Form>
            <Form.Field>
              <SearchBar
                isLoading={loading}
                isDisabled={loading}
                searchValue={searchValue}
                changeHandler={changeSearchValue}
                apiCall={search}
              />
            </Form.Field>
          </Form>
          <Heading className="resultCount" as="h2">Showing 1 - {results.results.length} of {results.totalHitCount} results found</Heading>
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
        </Fragment>
      }
      { error &&
      <Message
        error
        header="Search Failed"
        content="It's not your fault! We're experiencing technical issues. Please try again in a few minutes."
      />
      }
    </Page>
  );
};

const mapStateToProps = state => ({
  results: searchSelectors.getResults(state),
  searchValue: searchSelectors.getSearchValue(state),
  loading: searchSelectors.getLoading(state),
  error: searchSelectors.getError(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...searchActions }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultsContainer);

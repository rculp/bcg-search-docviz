import React, { Fragment } from 'react';
import uuid from 'uuid/v1';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as searchActions, selectors as searchSelectors } from 'redux/search/search';
import ReactHtmlParser from 'react-html-parser';

import Heading from 'components/Heading/Heading';
import Card from 'components/Card/Card';
import Message from 'components/Message/Message';

import Page from 'components/Page/Page';

import './Results.scss';

export const ResultsContainer = ({ history, results }) => {
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
          <Heading>Showing 1 - { results.results.length } of { results.totalHitCount } results found</Heading>
          {
            results.results.map(doc => (
              <Card key={uuid()} fluid color="green">
                <Card.Content>
                  <Card.PracticeArea>
                    {
                      doc.industryPA.map((pa, index) => (
                        <span key={uuid()}>{ index > 0 && <span>&nbsp;&bull;&nbsp;</span> }{pa}</span>
                      ))
                    }
                  </Card.PracticeArea>
                  <Card.MatchPercentage>{ doc.relevancyScore * 100 }% Match</Card.MatchPercentage>
                  <Card.Header>{ doc.title }</Card.Header>
                  <Card.Meta>UPDATED: { new Date(doc.uploadDate).toLocaleDateString() }</Card.Meta>
                  <Card.Description>{ ReactHtmlParser(doc.smallSummaryHtml) }</Card.Description>
                </Card.Content>
              </Card>
            ))
          }
        </Fragment>
      }
    </Page>
  );
};

const mapStateToProps = state => ({
  results: searchSelectors.getResults(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...searchActions }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultsContainer);

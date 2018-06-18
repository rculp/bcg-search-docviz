import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as searchActions, selectors as searchSelectors } from 'redux/search/search';
import uuid from 'uuid/v1';
import ReactHtmlParser from 'react-html-parser';
import { Header, Message, Grid } from 'semantic-ui-react';

import MasterHeader from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import RefinerTagCloud from 'components/RefinerTagCloud/RefinerTagCloud';
import RefinerTree from 'components/RefinerTree/RefinerTree';
import RefinerList from 'components/RefinerList/RefinerList';

import Page from 'components/Page/Page';

import './Results.css';

export const ResultsContainer = ({ history, results }) => {
  if (!results.Result) {
    history.push('/');
    return null;
  }
  return (
    <Page id="results">
      <MasterHeader />
      <main>
        {
          results.Result.Docs.length <= 0 &&
          <Message header="No Results Found" content="Please try a different search." />
        }
        {
          results.Result.Docs.length > 0 &&
          <Grid celled columns={2}>
            <Grid.Column width={4}>
              <Header as="h1">Refiners</Header>
              {
                results.Result.Boxes.map((box) => {
                  if (box.type === 'TagCloud') {
                    return <RefinerTagCloud key={uuid()} box={box} />;
                  } else if (box.type === 'Tree') {
                    return <RefinerTree key={uuid()} box={box} />;
                  } else if (box.type === 'List') {
                    return <RefinerList key={uuid()} box={box} />;
                  }
                  return <div key={uuid()}>Unrecognized refiner type</div>;
                })
              }
            </Grid.Column>
            <Grid.Column width={12}>
              <Header as="h1">Results</Header>
              {
                results.Result.Docs.map(doc => (
                  <Grid columns={2} key={uuid()}>
                    <Grid.Column>
                      {doc.filename}
                    </Grid.Column>
                    <Grid.Column>
                      { ReactHtmlParser(doc.largesummaryhtml) }
                    </Grid.Column>
                  </Grid>
                ))
              }
            </Grid.Column>
          </Grid>
        }
      </main>
      <Footer />
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

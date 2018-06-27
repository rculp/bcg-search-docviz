import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as searchActions, selectors as searchSelectors } from 'redux/search/search';
import uuid from 'uuid/v1';
import ReactHtmlParser from 'react-html-parser';
import { Header, Message } from 'semantic-ui-react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import MasterHeader from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import RefinerTagCloud from 'components/RefinerTagCloud/RefinerTagCloud';
import RefinerTree from 'components/RefinerTree/RefinerTree';
import RefinerList from 'components/RefinerList/RefinerList';

import Page from 'components/Page/Page';

import './Results.scss';

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
          <Grid>
            <Row>
              <Col xs={4}>
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
              </Col>
              <Col xs={8}>
                <Header as="h1">Results</Header>
                {
                  results.Result.Docs.map(doc => (
                    <Grid key={uuid()}>
                      <Row>
                        <Col xs={6}>
                          {doc.filename}
                        </Col>
                        <Col xs={6}>
                          { ReactHtmlParser(doc.largesummaryhtml) }
                        </Col>
                      </Row>
                    </Grid>
                  ))
                }
              </Col>
            </Row>
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

import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as searchActions, selectors as searchSelectors } from 'redux/search/search';
import uuid from 'uuid/v1';
import ReactHtmlParser from 'react-html-parser';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Heading from 'components/Heading/Heading';
import Footer from 'components/Footer/Footer';
import RefinerTagCloud from 'components/RefinerTagCloud/RefinerTagCloud';
import RefinerTree from 'components/RefinerTree/RefinerTree';
import RefinerList from 'components/RefinerList/RefinerList';
import Card from 'components/Card/Card';
import Form from 'components/Form/Form';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import Message from 'components/Message/Message';


import Page from 'components/Page/Page';

import './Results.scss';

export const ResultsContainer = ({ history, results }) => {
  if (!results.Result) {
    history.push('/');
    return null;
  }
  return (
    <Page id="results">
      <main>
        {
          results.Result.Docs.length <= 0 &&
          <Message header="No Results Found" content="Please try a different search." />
        }
        {
          results.Result.Docs.length > 0 &&
          <div>
            <Form>
              <Form.Field>
                <Input
                  size="massive"
                  placeholder="Search..."
                  id="query"
                  icon="search"
                  iconPosition="left"
                  label={<Button type="submit" onClick={this.fetchResults}>Submit</Button>}
                  labelPosition="right"
                />
              </Form.Field>
            </Form>
            <Heading>Showing 1 - 20 of 432 results found</Heading>
            <Card fluid color="green">
              <Card.Content>
                <Card.PracticeArea>Industrial Goods &bull; Technology Advantage</Card.PracticeArea>
                <Card.MatchPercentage>83% Match</Card.MatchPercentage>
                <Card.Header>Digital trends as an enabler for digital transformation: How can TA support you on Digital transformation?</Card.Header>
                <Card.Meta>UPDATED: 12 OCT 2018</Card.Meta>
                <Card.Description>With the advent of AI and Intelligent Automation capabilies, the possibilites for digital transformation to create a shift in healthcare providers mindsets is proving a challenge to conventional regulation…</Card.Description>
              </Card.Content>
            </Card>
            <Grid>
              <Row>
                <Col xs={4}>
                  <Heading as="h1">Refiners</Heading>
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
                  <Heading as="h1">Results</Heading>
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
          </div>
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

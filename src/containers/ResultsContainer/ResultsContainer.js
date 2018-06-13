import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as searchActions, selectors as searchSelectors } from 'redux/search';
import uuid from 'uuid/v1';
import { Header, Message, Grid } from 'semantic-ui-react';

import MasterHeader from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import Page from 'components/Page/Page';

import './ResultsContainer.css';

class ResultsContainer extends Component {
  renderTagCloudRefiner = box => (
    <div key={uuid()}>
      <Header as="h2">{box.display}</Header>
      { box.items.map(item => <div key={uuid()}>{item.Name}</div>) }
    </div>
  );

  renderTreeRefiner = box => (
    <div key={uuid()}>
      <Header as="h2">{box.display}</Header>
      Tree Refiner - Sinequa doesn&apos;t seem to return the actual items. Possibly need to make another API call?
    </div>
  );

  renderListRefiner = box => (
    <div key={uuid()}>
      <Header as="h2">{box.display}</Header>
      { box.items.map(item => <div key={uuid()}>{item.Name}</div>) }
    </div>
  );

  render = () => {
    const { history, results } = this.props;
    if (!results.Result) {
      history.push('/');
      return null;
    }
    return (
      <Page id="results">
        <MasterHeader />
        <main>
          <Grid columns={2} divided>
            <Grid.Column>
              <Header as="h1">Results</Header>
              {
                results.Result.Docs.length <= 0 &&
                <Message header="No Results Found" content="Please try a different search." />
              }
              {
                results.Result.Docs.length > 0 &&
                results.Result.Docs.map(doc => <div key={uuid()}>{doc.filename}</div>)
              }
            </Grid.Column>
            <Grid.Column>
              <Header as="h1">Refiners</Header>
              {
                results.Result.Boxes.map((box) => {
                  if (box.type === 'TagCloud') {
                    return this.renderTagCloudRefiner(box);
                  } else if (box.type === 'Tree') {
                    return this.renderTreeRefiner(box);
                  } else if (box.type === 'List') {
                    return this.renderListRefiner(box);
                  }
                  return <div>Unrecognized refiner type</div>;
                })
              }
            </Grid.Column>
          </Grid>
        </main>
        <Footer />
      </Page>
    );
  };
}

const mapStateToProps = state => ({
  results: searchSelectors.getResults(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...searchActions }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultsContainer);

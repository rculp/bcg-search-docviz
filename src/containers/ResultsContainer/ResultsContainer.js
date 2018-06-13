import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as searchActions, selectors as searchSelectors } from 'redux/search';
import uuid from 'uuid/v1';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import Page from 'components/Page/Page';

import './ResultsContainer.css';

const ResultsContainer = ({ history, results }) => {
  if (!results.Result) {
    history.push('/');
    return null;
  }
  return (
    <Page id="results">
      <Header />
      <main>
        { results.Result.Docs.map(doc => <div key={uuid()}>{doc.filename}</div>) }
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

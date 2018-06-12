import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as searchActions, selectors as searchSelectors } from 'redux/search';

import { Link } from 'react-router-dom';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import Page from 'components/Page/Page';

import './ResultsContainer.css';

const ResultsContainer = ({ results }) => (
  <Page id="results">
    <Link to="/">Back</Link>
    <Header />
    <main>
      {JSON.stringify(results)}
    </main>
    <Footer />
  </Page>
);

const mapStateToProps = state => ({
  results: searchSelectors.getResults(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...searchActions }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultsContainer);

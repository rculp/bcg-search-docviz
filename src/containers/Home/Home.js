import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'react-flexbox-grid';
import { actions as searchActions, selectors as searchSelectors } from 'redux/search/search';
import { UI_URL } from 'config';

import Page from 'components/Page/Page';
import Form from 'components/Form/Form';
import SearchBar from 'components/SearchBar/SearchBar';

import './Home.scss';

export class HomeContainer extends Component {
  componentDidMount = () => {
    const { actions: { changeSearchValue }, history } = this.props;
    let q = new URL(window.location).searchParams.get('q');
    changeSearchValue(q);
    document.title = `Home${q ? ` | ${q}` : ''}`;
    this.historyUnlistener = history.listen(() => {
      q = new URL(window.location).searchParams.get('q');
      changeSearchValue(q);
      document.title = `Home${q ? ` | ${q}` : ''}`;
    });
  };

  componentWillUnmount = () => {
    this.historyUnlistener();
  };

  submitHandler = () => {
    const { searchValue, history } = this.props;
    history.push(UI_URL.HOME(searchValue));
    history.push(UI_URL.RESULTS(searchValue));
  };

  render = () => {
    const {
      actions: { changeSearchValue }, searchValue
    } = this.props;
    return (
      <Page id="home">
        <Row>
          <Col xs={12} lg={6} lgOffset={3}>
            <h2>Sinequa Search</h2>
            <Form>
              <Form.Field>
                <SearchBar
                  searchValue={searchValue}
                  changeHandler={changeSearchValue}
                  submitHandler={this.submitHandler}
                />
              </Form.Field>
            </Form>
          </Col>
        </Row>
      </Page>
    );
  };
}

const mapStateToProps = state => ({
  searchValue: searchSelectors.getSearchValue(state),
  loading: searchSelectors.getLoading(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...searchActions }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

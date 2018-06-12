import React, { Component } from 'react';
import sdk from 'sinequa-sdk';
import { Input, Button } from 'semantic-ui-react';
import uuid from 'uuid/v1';

import { Link } from 'react-router-dom';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import './ResultsContainer.css';

class ResultsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      suggestion: [],
      response: [],
      previewIndex: -1,
      testResponse: null
    };
  }

  render = () => (
    <div className="page">
      <Link to="/">Back</Link>
      <Header />
      <main>
        <Button content="Click Here" />
        {JSON.stringify(this.state.testResponse)}

        <h2>Alerts</h2>
        <button onClick={() => {
            sdk.search.listAlerts().then(testResponse => this.setState({ testResponse }));
          }}
        >
            List
        </button>

        <button onClick={() => {
            sdk.search.createAlerts({
              name: 'MyAlert',
              description: 'alert description',
              timezone: 'Europe/Berlin',
              profile: 'DocSearch',
              frequency: 'immediate',
              days: 'Tuesday,Thursday',
              from: '09:00',
              to: '17:00',
              times: '12:00',
              active: true,
              combineWithOtherAlerts: false,
              respectTabSelection: false,
              query: {
                emptyQuestion: true,
                questionLanguage: 'autodetect',
                fuzzySearch: true,
                phonetics: false,
                scmode: 'Correct'
              }
            }).then(testResponse => this.setState({ testResponse }));
          }}
        >
            Create
        </button>

        <button onClick={() => {
            sdk.search.readAlerts('MyAlert').then(testResponse => this.setState({ testResponse }));
          }}
        >
            Read
        </button>

        <button onClick={() => {
            sdk.search.updateAlerts({
              name: 'MyNewAlertName',
              oldName: 'MyAlert',
              description: 'alert description',
              timezone: 'Europe/Berlin',
              profile: 'DocSearch',
              frequency: 'immediate',
              days: 'Monday,Thursday',
              from: '09:00',
              to: '17:00',
              times: '12:00',
              active: true,
              combineWithOtherAlerts: false,
              respectTabSelection: false,
              query: {
                emptyQuestion: true,
                questionLanguage: 'autodetect',
                fuzzySearch: true,
                phonetics: false,
                scmode: 'Correct'
              }
            }).then(testResponse => this.setState({ testResponse }));
          }}
        >
            Update
        </button>

        <button onClick={() => {
            sdk.search.deleteAlerts('MyAlert').then(testResponse => this.setState({ testResponse }));
          }}
        >
            Delete
        </button>

        <form>
          <label htmlFor="searchBar">
              Name:
            <Input placeholder="Search..." id="searchBar" value={this.state.value} onChange={this.handleChange} />
          </label>
        </form>

        {false &&
          <div>Suggestions:
            {
              this.state.suggestion.map((suggestion, index) => (
                <div key={uuid()} style={{ color: 'lightgray' }}>
                  <button onClick={() => { this.setState({ value: suggestion.Display }); this.query(); }}>
                    {suggestion.Display}
                  </button>
                </div>
                ))
            }
          </div>
        }

        <table>
          <tbody>
            {this.state.response.map((doc, index) => (
              <tr key={uuid()}>
                <td>{doc.filename}</td>
                <td />
                <td>
                  {this.state.previewIndex === index && <iframe title="results" src={doc.resulturl} />}
                  {this.state.previewIndex !== index && <button onClick={() => { this.state.previewIndex = index; this.forceUpdate(); }}>Preview</button>}
                </td>
              </tr>
              ))}
          </tbody>
        </table>
      </main>
      <Footer />
    </div>
  );
}

export default ResultsContainer;

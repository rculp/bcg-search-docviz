import React from 'react';
import ReactDOM from 'react-dom';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

import registerServiceWorker from './register-service-worker';

import store from 'redux/store/store';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

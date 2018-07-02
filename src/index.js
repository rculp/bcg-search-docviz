import 'semantic-ui-css/semantic.css';
import 'index.scss';

import registerServiceWorker from 'registerServiceWorker';

import React from 'react';
import ReactDOM from 'react-dom';

import App from 'components/App/App';

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
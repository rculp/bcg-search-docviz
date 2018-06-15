import registerServiceWorker from 'registerServiceWorker';
jest.mock('registerServiceWorker', () => (jest.fn()));

import React from 'react';
import ReactDOM from 'react-dom';
jest.mock('react-dom', ()=> ({render: jest.fn()}));

import App from 'components/App/App';

import './index';

describe('Index file', () => {
  it('mounts App component to the DOM and registers service worker', () => {
    expect(ReactDOM.render).toHaveBeenCalledWith(<App />, null);
    expect(registerServiceWorker).toHaveBeenCalled();
  });
});
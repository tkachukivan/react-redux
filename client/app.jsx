import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Promise from 'promise-polyfill';
import storeConfig from './store';
import routes from './routes';
import './main.scss';

// To add to window
if (!window.Promise) {
  window.Promise = Promise;
}

const store = storeConfig();
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root'),
);

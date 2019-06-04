import React from 'react';
import ReactDOM from 'react-dom';
import { routing } from './router/router';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { rootreducer } from './reducers';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const store = createStore(
  rootreducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
ReactDOM.render(
  <Provider store={store}>
    {routing}
  </Provider>
  , document.getElementById('root'));

// IMPORT PACKAGE REFERENCES

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// IMPORT PROJECT REFERENCES

import configureStore from './store/configureStore';
import Root from './containers/Root';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';

// RENDER ROUTER
const store = configureStore();

render(
  <Router>
    <Root store={store} />
  </Router>,
  document.getElementById( 'root' ),
);

registerServiceWorker();

// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import DevTools from './DevTools';
import { Route } from 'react-router-dom';

// IMPORT PROJECT REFERENCES

import { App } from './App';

// COMPONENT

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Route path="/" component={App} />
      <DevTools />
    </div>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;

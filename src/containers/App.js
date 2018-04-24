// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';

// IMPORT PROJECT REFERENCES

import Header from '../components/header/Header';
import BitcoinMonitor from '../containers/BitcoinMonitor';

// COMPONENT

const App = ( { children } ) => (
  <main className="App">
    <Header title="Bitcoin Monitor" />
    <BitcoinMonitor />
    {children}
  </main>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;

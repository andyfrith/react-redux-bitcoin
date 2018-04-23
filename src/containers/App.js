// IMPORT PACKAGE REFERENCES

import React, { Component } from 'react';
import PropTypes from 'prop-types';

// IMPORT PROJECT REFERENCES

import { Header } from '../components/header/Header';
import { BitcoinMonitor } from '../containers/BitcoinMonitor';

// COMPONENT

class App extends Component {
  static propTypes = {
    // Injected by React Router
    children: PropTypes.node
  };
  render() {
    const { children } = this.props;
    return (
      <main className="App">
        <Header title="Bitcoin Monitor" />
        <BitcoinMonitor />
        {children}
      </main>
    );
  }
}

export { App };

// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';

// IMPORT PROJECT REFERENCES

import { CurrentPrice } from './CurrentPrice';
import { PriceHistory } from './PriceHistory';

// COMPONENT

const Display = ({ currentPrice, fetching, error, prices }) => {
  if (fetching) {
    return <div>Loading ...</div>;
  }
  if (error) {
    return <div>Error: {error}! Please try again.</div>;
  }
  return (
    <div className="mt-md-5 mx-md-5">
      <CurrentPrice currentPrice={currentPrice} />
      <PriceHistory prices={prices} />
    </div>
  );
};

Display.defaultProps = {
  currentPrice: {}
};

Display.propTypes = {
  currentPrice: PropTypes.object,
  fetching: PropTypes.bool,
  error: PropTypes.string,
  prices: PropTypes.object
};

export { Display };

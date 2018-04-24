// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

// COMPONENT

const CurrentPrice = ( { currentPrice } ) => {
  const usd = () =>
    ( currentPrice && currentPrice.bpi && currentPrice.bpi.USD
      ? `$${ currentPrice.bpi.USD.rate_float }`
      : '' );

  const lastUpdated = () =>
    ( currentPrice && currentPrice.time && currentPrice.time.updatedISO
      ? moment( currentPrice.time.updatedISO ).format( 'YYYY-MM-DD, h:mm:ss a' )
      : '' );

  return (
    <div className="current-price">
      <span className="label">Current Price:</span>
      {usd()}
      <div className="last-updated">Last Updated: {lastUpdated()}</div>
    </div>
  );
};

CurrentPrice.propTypes = {
  currentPrice: PropTypes.object.isRequired,
};

export default CurrentPrice;

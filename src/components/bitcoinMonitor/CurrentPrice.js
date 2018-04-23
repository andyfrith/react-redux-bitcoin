// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

// COMPONENT

const CurrentPrice = ({ currentPrice }) => {
  const usd = () => {
    return currentPrice && currentPrice.bpi && currentPrice.bpi.USD
      ? currentPrice.bpi.USD.symbol + currentPrice.bpi.USD.rate_float
      : '';
  };

  const lastUpdated = () => {
    return currentPrice && currentPrice.time && currentPrice.time.updatedISO
      ? moment(currentPrice.time.updatedISO).format('YYYY-MM-DD, h:mm:ss a')
      : '';
  };

  return (
    <div className="current-price">
      <span className="label">Current Price:</span>
      {usd()}
      <div className="last-updated">Last Updated: {lastUpdated()}</div>
    </div>
  );
};

// CurrentPrice.defaultProps = {
//   currentPrice: {
//     time: {
//       updatedISO: '2018-04-22T17:17:00+00:00'
//     },
//     bpi: {
//       USD: {
//         code: 'USD',
//         symbol: '$',
//         rate: '1,000,000.00',
//         description: 'United States Dollar',
//         rate_float: 1000000.0
//       }
//     }
//   }
// };
CurrentPrice.propTypes = {
  currentPrice: PropTypes.object
};

export { CurrentPrice };

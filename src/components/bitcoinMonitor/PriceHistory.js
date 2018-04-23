// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

// COMPONENT

const PriceHistory = ({ prices }) => {
  return (
    <div>
      <h5>Past Week</h5>
      <table className="table">
        <thead>
          <tr>
            <th className="text-uppercase text-center">Date</th>
            <th className="text-uppercase text-center">Price</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {_.keys(prices).map((key) => {
            return (
              <tr key={key}>
                <td>{key}</td>
                <td>{prices[key]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

// PriceHistory.defaultProps = {
//   prices: {
//     '2018-04-15': 8357.0375,
//     '2018-04-16': 8051.345,
//     '2018-04-17': 7890.15,
//     '2018-04-18': 8163.69,
//     '2018-04-19': 8273.7413,
//     '2018-04-20': 8863.5025,
//     '2018-04-21': 8917.5963
//   }
// };

PriceHistory.propTypes = {
  prices: PropTypes.object
};

export { PriceHistory };

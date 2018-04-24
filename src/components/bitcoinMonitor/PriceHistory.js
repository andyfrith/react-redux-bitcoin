// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

// COMPONENT

const PriceHistory = ( { prices } ) => (
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
        {_.keys( prices ).map( key => (
          <tr key={key}>
            <td>{key}</td>
            <td>{prices[ key ]}</td>
          </tr>
        ) )}
      </tbody>
    </table>
  </div>
);

PriceHistory.propTypes = {
  prices: PropTypes.object.isRequired,
};

export default PriceHistory;

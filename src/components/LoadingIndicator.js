// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';

// COMPONENT

const LoadingIndicator = props => (
  <div>
    {props.busy && (
      <div
        style={{
          top: '40%',
          left: '50%',
          textAlign: 'center',
          color: '#26A69A',
          position: 'absolute',
          transform: 'translate(-50%, 0)',
        }}
      >
        <i className="fa fa-spinner fa-spin fa-4x fa-fw" />
      </div>
    )}
  </div>
);

LoadingIndicator.propTypes = {
  busy: PropTypes.bool.isRequired,
};

export default LoadingIndicator;

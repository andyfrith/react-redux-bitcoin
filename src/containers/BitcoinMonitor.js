// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

// IMPORT PROJECT REFERENCES

import { getCurrentPrice, getPrices } from '../actions';
import { Display } from '../components/bitcoinMonitor/Display';
import { LoadingIndicator } from '../components/LoadingIndicator';

// CONTAINER COMPONENT

class BitcoinMonitor extends React.Component {
  componentDidMount() {
    const { getCurrentPrice, getPrices } = this.props;
    const startDate = moment()
      .subtract(7, 'days')
      .format('YYYY-MM-DD');

    const endDate = moment()
      .subtract(1, 'days')
      .format('YYYY-MM-DD');

    getCurrentPrice();
    getPrices(startDate, endDate);
  }

  render() {
    const { currentPrice, fetched, fetching, prices } = this.props;
    return (
      <Fragment>
        {fetched && (
          <Display
            currentPrice={currentPrice}
            fetching={fetching}
            prices={prices}
          />
        )}
        {<LoadingIndicator busy={fetching} />}
      </Fragment>
    );
  }
}

// CONFIGURE COMPONENT PROP TYPES

BitcoinMonitor.propTypes = {
  currentPrice: PropTypes.object,
  fetched: PropTypes.bool,
  fetching: PropTypes.bool
};

// CONFIGURE REACT REDUX

const mapStateToProps = (state) => {
  const { fetched, fetching } = state.currentPrice;
  const currentPrice = state.currentPrice.data;
  const prices = state.prices.data.bpi;

  return {
    currentPrice,
    fetched,
    fetching,
    prices
  };
};

const hoc = connect(mapStateToProps, { getCurrentPrice, getPrices })(
  BitcoinMonitor
);

// EXPORT COMPONENT

export { hoc as BitcoinMonitor };

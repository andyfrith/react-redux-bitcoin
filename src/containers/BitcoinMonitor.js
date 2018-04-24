// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

// IMPORT PROJECT REFERENCES

import { getCurrentPrice, getPrices } from '../actions';
import Display from '../components/bitcoinMonitor/Display';
import LoadingIndicator from '../components/LoadingIndicator';

// CONTAINER COMPONENT

class BitcoinMonitor extends React.Component {
  componentDidMount() {
    const { getCurrentPriceConnected, getPricesConnected } = this.props;
    const startDate = moment()
      .subtract( 7, 'days' )
      .format( 'YYYY-MM-DD' );

    const endDate = moment()
      .subtract( 1, 'days' )
      .format( 'YYYY-MM-DD' );

    getCurrentPriceConnected();
    getPricesConnected( startDate, endDate );
  }

  render() {
    const {
      currentPrice, fetched, fetching, prices,
    } = this.props;
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
  currentPrice: PropTypes.object.isRequired,
  fetched: PropTypes.bool.isRequired,
  fetching: PropTypes.bool.isRequired,
  prices: PropTypes.object.isRequired,
  getCurrentPriceConnected: PropTypes.func.isRequired,
  getPricesConnected: PropTypes.func.isRequired,
};

// CONFIGURE REACT REDUX

const mapStateToProps = ( state ) => {
  const { fetched, fetching } = state.currentPrice;
  const currentPrice = state.currentPrice.data;
  const prices = state.prices.data.bpi;

  return {
    currentPrice,
    fetched,
    fetching,
    prices,
  };
};

// EXPORT COMPONENT

export default connect( mapStateToProps, {
  getCurrentPriceConnected: getCurrentPrice,
  getPricesConnected: getPrices,
} )( BitcoinMonitor );

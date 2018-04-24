// IMPORT PACKAGE REFERENCES

import { combineReducers } from 'redux';

// IMPORT REDUCERS

import GetCurrentPriceReducer from './GetCurrentPriceReducer';
import GetPricesReducer from './GetPricesReducer';

// EXPORT REDUCER

const AppReducer = combineReducers( {
  currentPrice: GetCurrentPriceReducer,
  prices: GetPricesReducer,
} );

export default AppReducer;

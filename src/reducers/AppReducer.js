// IMPORT PACKAGE REFERENCES

import { combineReducers } from 'redux';

// IMPORT REDUCERS

import { GetCurrentPriceReducer } from './GetCurrentPriceReducer';
import { GetPricesReducer } from './GetPricesReducer';

// EXPORT REDUCER

export const AppReducer = combineReducers({
  currentPrice: GetCurrentPriceReducer,
  prices: GetPricesReducer
});

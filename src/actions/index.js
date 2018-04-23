// IMPORT SERVICES

import { getCurrentPrice, getPrices } from '../services/BitcoinService';

// GET CURRENT PRICE ACTION NAMES

export const GET_CURRENT_PRICE = 'GET_CURRENT_PRICE';
export const GET_CURRENT_PRICE_PENDING = 'GET_CURRENT_PRICE_PENDING';
export const GET_CURRENT_PRICE_FULFILLED = 'GET_CURRENT_PRICE_FULFILLED';
export const GET_CURRENT_PRICE_REJECTED = 'GET_CURRENT_PRICE_REJECTED';

// ACTIONS GENERATORS

const getCurrentPriceAction = () => ({
  type: GET_CURRENT_PRICE,
  payload: getCurrentPrice()
});

// GET PRICES ACTION NAMES

export const GET_PRICES = 'GET_PRICES';
export const GET_PRICES_PENDING = 'GET_PRICES_PENDING';
export const GET_PRICES_FULFILLED = 'GET_PRICES_FULFILLED';
export const GET_PRICES_REJECTED = 'GET_PRICES_REJECTED';

// ACTIONS GENERATORS

const getPricesAction = (startDate, endDate) => ({
  type: GET_PRICES,
  payload: getPrices(startDate, endDate)
});

// EXPORT ACTIONS

export {
  getCurrentPriceAction as getCurrentPrice,
  getPricesAction as getPrices
};

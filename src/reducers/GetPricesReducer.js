// IMPORT ACTION CONSTANTS

import {
  GET_PRICES_PENDING,
  GET_PRICES_FULFILLED,
  GET_PRICES_REJECTED
} from '../actions';

// INITIALIZE STATE

const initialState = {
  data: {},
  fetching: false,
  fetched: false,
  failed: false
};

// REDUCER

export const GetPricesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRICES_PENDING:
      return {
        ...state,
        data: {},
        fetching: true,
        fetched: false,
        failed: false
      };
    case GET_PRICES_FULFILLED:
      return {
        ...state,
        data: action.payload,
        fetching: false,
        fetched: true,
        failed: false
      };
    case GET_PRICES_REJECTED:
      return {
        ...state,
        data: {},
        fetching: false,
        fetched: false,
        failed: true
      };
    default:
      return state;
  }
};

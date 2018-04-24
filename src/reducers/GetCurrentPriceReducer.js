// IMPORT ACTION CONSTANTS

import {
  GET_CURRENT_PRICE_PENDING,
  GET_CURRENT_PRICE_FULFILLED,
  GET_CURRENT_PRICE_REJECTED,
} from '../actions';

// INITIALIZE STATE

const initialState = {
  data: {},
  fetching: false,
  fetched: false,
  failed: false,
};

// REDUCER

const GetCurrentPriceReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case GET_CURRENT_PRICE_PENDING:
      return {
        ...state,
        data: {},
        fetching: true,
        fetched: false,
        failed: false,
      };
    case GET_CURRENT_PRICE_FULFILLED:
      return {
        ...state,
        data: action.payload,
        fetching: false,
        fetched: true,
        failed: false,
      };
    case GET_CURRENT_PRICE_REJECTED:
      return {
        ...state,
        data: {},
        fetching: false,
        fetched: false,
        failed: true,
      };
    default:
      return state;
  }
};

export default GetCurrentPriceReducer;

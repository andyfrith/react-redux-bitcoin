// IMPORT ACTION CONSTANTS

import {
  GET_CURRENT_PRICE_PENDING,
  GET_CURRENT_PRICE_FULFILLED,
  GET_CURRENT_PRICE_REJECTED
} from '../actions';

// INITIALIZE STATE

const initialState = {
  data: {},
  fetching: false,
  fetched: false,
  failed: false
};

// const initialState = {
//   data: {
//     time: {
//       updatedISO: '2018-04-22T17:17:00+00:00'
//     },
//     bpi: {
//       USD: {
//         code: 'USD',
//         symbol: '$',
//         rate: '1,000,000.00',
//         description: 'United States Dollar',
//         rate_float: 1000000.0
//       }
//     }
//   },
//   fetching: false,
//   fetched: true,
//   failed: false
// };

// REDUCER

export const GetCurrentPriceReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_PRICE_PENDING:
      return {
        ...state,
        data: {},
        fetching: true,
        fetched: false,
        failed: false
      };
    case GET_CURRENT_PRICE_FULFILLED:
      return {
        ...state,
        data: action.payload,
        fetching: false,
        fetched: true,
        failed: false
      };
    case GET_CURRENT_PRICE_REJECTED:
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

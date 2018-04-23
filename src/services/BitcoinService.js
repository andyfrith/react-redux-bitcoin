// IMPORT PACKAGE REFERENCES

import axios from 'axios';

// INITIALIZATION

const API = 'https://api.coindesk.com/v1/bpi/';

// SERVICES

export const getCurrentPrice = () =>
  axios
    .get(`${API}currentPrice.json`, {})
    .then((response) => response.data, (error) => error.response.status);

export const getPrices = (startDate, endDate) =>
  axios
    .get(`${API}historical/close.json?start=${startDate}&end=${endDate}`, {})
    .then((response) => response.data, (error) => error.response.status);

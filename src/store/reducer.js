import {createReducer} from '@reduxjs/toolkit';
import {loadCurrency} from './action';

const initialState = {
  startCurrency: ``,
  resultRates: {},
  isCurrencyLoaded: false,
};

const mainReducer = createReducer(initialState, (builder) => {
  builder.addCase(loadCurrency, (state, action) => {
    state.isCurrencyLoaded = true;
    state.startCurrency = action.payload.base;
    state.resultRates = action.payload.rates;
  });
});

export {mainReducer};

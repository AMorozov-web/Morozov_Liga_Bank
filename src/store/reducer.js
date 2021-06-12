import {createReducer} from '@reduxjs/toolkit';
import {loadRates} from './action';

const initialState = {
  startCurrency: ``,
  resultRates: {},
  isCurrencyLoaded: false,
};

const mainReducer = createReducer(initialState, (builder) => {
  builder.addCase(loadRates, (state, action) => {
    state.isCurrencyLoaded = true;
    state.startCurrency = action.payload.base;
    state.resultRates = action.payload.rates;
  });
});

export {mainReducer};

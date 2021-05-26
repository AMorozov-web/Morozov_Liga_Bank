import {createSelector} from 'reselect';

const selectStartCurrency = (state) => state.startCurrency;
const selectResultRates = (state) => state.resultRates;
const selectIsCurrencyLoaded = (state) => state.isCurrencyLoaded;
const selectOneRate = (resultCurrency) => createSelector(
    selectResultRates,
    (rates) => {
      const rateKey = Object.keys(rates).find((key) => key === resultCurrency);
      return rates[rateKey];
    }
);


export {
  selectStartCurrency,
  selectResultRates,
  selectOneRate,
  selectIsCurrencyLoaded,
};

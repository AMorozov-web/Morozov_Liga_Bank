import {CURRENCIES} from "./const";

const getTargetCurrencies = (currenciesObj) => {
  const targetCurrencies = {};

  for (const i of Object.keys(currenciesObj)) {
    if (CURRENCIES.includes(i)) {
      targetCurrencies[i] = currenciesObj[i];
    }
  }

  return targetCurrencies;
};

export {getTargetCurrencies};

import {createAction} from '@reduxjs/toolkit';

const ActionType = {
  LOAD_CURRENCY: `data/loadCurrency`,
};

const loadCurrency = createAction(ActionType.LOAD_CURRENCY, (data) => {
  return {
    payload: data,
  };
});

export {
  loadCurrency
};

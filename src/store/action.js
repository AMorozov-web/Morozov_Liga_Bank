import {createAction} from '@reduxjs/toolkit';

const ActionType = {
  LOAD_CURRENCY: `data/loadRates`,
};

const loadRates = createAction(ActionType.LOAD_CURRENCY, (data) => {
  return {
    payload: data,
  };
});

export {
  loadRates
};

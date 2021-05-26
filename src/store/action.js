import {createAction} from '@reduxjs/toolkit';

const ActionType = {
  LOAD_PAIRS: `data/loadPairs`,
};

const loadPairs = createAction(ActionType.LOAD_PAIRS, (pairs) => {
  return {
    payload: pairs,
  };
});

export {
  loadPairs
};

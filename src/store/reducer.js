import {createReducer} from '@reduxjs/toolkit';
import {loadPairs} from './action';

const initialState = {
  pairs: {},
  isPairsLoaded: false,
};

const mainReducer = createReducer(initialState, (builder) => {
  builder.addCase(loadPairs, (state, action) => {
    state.isPairsLoaded = true;
    state.pairs = action.payload;
  });
});

export {mainReducer};

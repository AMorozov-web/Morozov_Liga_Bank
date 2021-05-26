import {createSelector} from 'reselect';

const selectAllPairs = (state) => state.pairs;
const selectIsPairsLoaded = (state) => state.isPairsLoaded;
const selectOnePair = (pair) => createSelector(
    selectAllPairs,
    (pairs) => pairs.find((el) => el === pair)
);

export {
  selectAllPairs,
  selectIsPairsLoaded,
  selectOnePair,
};

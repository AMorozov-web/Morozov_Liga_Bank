import {
  apiKey,
  currencyPairs,
} from "../const";
import {loadPairs} from "./action";

const fetchPairs = () => (dispatch, _getState, api) => (
  api.get(`/`, {
    params: {
      get: `rates`,
      pairs: currencyPairs.join(`,`),
      key: apiKey,
    }
  })
    .then(({data}) => {
      dispatch(loadPairs(data));
    })
    .catch(() => {})
);

export {fetchPairs};

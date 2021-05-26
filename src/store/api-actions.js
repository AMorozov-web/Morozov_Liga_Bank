import {
  APIKEY,
  ApiRoute,
} from "../const";

const fetchLatestRates = (symbolsArr) => (dispatch, _getState, api) => (
  api.get(ApiRoute.LATEST, {
    params: {
      [`access_key`]: APIKEY,
      symbols: symbolsArr.join(`,`),
    }
  })
    .then((data) => {
      console.log(data);
    })
    .catch(() => {})
);

export {
  fetchLatestRates,
};

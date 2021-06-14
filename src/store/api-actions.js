const fetchLatestSelectedRates = (currency) => (dispatch, _getState, api) => (
  api.get(`/latest/${currency}`)
    .then(({data}) => {
      console.log(data);
    })
    .catch(() => {})
);

export {
  fetchLatestSelectedRates,
};

const BACKEND_URL = `http://data.fixer.io/api/`;
const REQUEST_TIMEOUT = 5000;
const APIKEY = `f1a14d5f39a56f7ce7ce0dcaf8d3083e`;

const ApiRoute = {
  LATEST: `/latest`,
  CONVERT: `/convert`,
};

const Position = {
  HEADER: `header`,
  FOOTER: `footer`,
};

export {
  BACKEND_URL,
  REQUEST_TIMEOUT,
  APIKEY,
  Position,
  ApiRoute,
};

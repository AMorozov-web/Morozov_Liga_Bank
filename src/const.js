const BACKEND_URL = `https://v6.exchangerate-api.com/v6/f5f855537fa8d294cc5bcd4b`;
const REQUEST_TIMEOUT = 5000;

const CURRENCIES = [`USD`, `EUR`, `RUB`, `GBR`, `CNY`];

const DEFAULT_CURRENCY = `RUB`;

const Position = {
  HEADER: `header`,
  FOOTER: `footer`,
};

export {
  BACKEND_URL,
  REQUEST_TIMEOUT,
  CURRENCIES,
  DEFAULT_CURRENCY,
  Position,
};

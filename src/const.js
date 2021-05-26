const BACKEND_URL = `https://currate.ru/api/`;
const REQUEST_TIMEOUT = 5000;

const Position = {
  HEADER: `header`,
  FOOTER: `footer`,
};

const apiKey = `c356d01ba476cba3c2c37c26537a5498`;

const currencyPairs = [
  `USDRUB`,
  `USDEUR`,
  `USDGBR`,
  `USDCNY`,
  `RUBUSD`,
  `RUBEUR`,
  `RUBGBR`,
  `RUBCNY`,
  `EURUSD`,
  `EURRUB`,
  `EURGBR`,
  `EURCNY`,
  `GBRUSD`,
  `GBRRUB`,
  `GBREUR`,
  `GBRCNY`,
  `CNYUSD`,
  `CNYRUB`,
  `CNYEUR`,
  `CNYGBR`
];


export {
  BACKEND_URL,
  REQUEST_TIMEOUT,
  Position,
  apiKey,
  currencyPairs,
};

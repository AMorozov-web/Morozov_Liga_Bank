import React from 'react';
import {Promo} from '../promo/promo';
import {ConverterForm} from '../converter-form/converter-form';
import {ConverterHistory} from '../converter-history/converter-history';

import './main.scss';

const Main = () => {
  return (
    <main className="converter page-body__main">
      <Promo />
      <ConverterForm />
      <ConverterHistory />
    </main>
  );
};

export {Main};

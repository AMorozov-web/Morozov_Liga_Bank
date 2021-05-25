import React from 'react';
import {Form} from '../form/form';

import './converter-form.scss';

const ConverterForm = () => {

  return (
    <section className="converter-form converter__converter-form">
      <div className="converter-form__container">
        <h2 className="converter-form__title">
          Конвертер валют
        </h2>
        <Form />
      </div>
    </section>
  );
};

export {ConverterForm};

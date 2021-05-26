import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchLatestRates} from '../../store/api-actions';
import {selectIsCurrencyLoaded} from '../../store/selectors';
import {Form} from '../form/form';

import './converter-form.scss';

const ConverterForm = () => {
  const isCurrencyLoaded = useSelector(selectIsCurrencyLoaded);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isCurrencyLoaded) {
      dispatch(fetchLatestRates([`RUB`]));
    }
  }, []);

  if (!isCurrencyLoaded) {
    console.log(`Not loaded`);
  }

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

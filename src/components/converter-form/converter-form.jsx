import React from 'react';

import './converter-form.scss';

const ConverterForm = () => {

  return (
    <section className="converter-form converter__converter-form">
      <div className="converter-form__container">
        <h2 className="converter-form__title">
          Конвертер валют
        </h2>
        <form className="form converter-form">
          <div className="form__input-start-wrapper">
            <label className="form__input-start-label" htmlFor="input-start">
              У меня есть
            </label>
            <input className="form__input-start" type="number" id="input-start" name="input-start" />
          </div>
          <select className="form__input-start-select" name="input-start-select" id="input-start-select">
            <option value="USD">
              USD
            </option>
            <option selected value="RUB">
              RUB
            </option>
            <option value="EUR">
              EUR
            </option>
            <option value="GBR">
              GBR
            </option>
            <option value="CNY">
              CNY
            </option>
          </select>
          <button className="form__change-values-button" aria-label="swap values">
            <svg width="56" height="36" viewBox="0 0 56 36" fill="none">
              <path d="M19 1L3 9L19 17" stroke="#1F1E25" strokeWidth="2"/>
              <path d="M3 9C9.66667 9 33.3241 9 44.6667 9L53 9" stroke="#1F1E25" strokeWidth="2"/>
              <path d="M37 35L53 27L37 19" stroke="#1F1E25" strokeWidth="2"/>
              <path d="M53 27C46.3333 27 22.6759 27 11.3333 27H3" stroke="#1F1E25" strokeWidth="2"/>
            </svg>
          </button>
          <div className="form__input-result-wrapper">
            <label className="form__input-result-label" htmlFor="input-result">
              У меня есть
            </label>
            <input className="form__input-result" type="number" id="input-result" name="input-result" />
          </div>
          <select className="form__input-result-select" name="input-result-select" id="input-result-select">
            <option selected value="USD">
              USD
            </option>
            <option value="RUB">
              RUB
            </option>
            <option value="EUR">
              EUR
            </option>
            <option value="GBR">
              GBR
            </option>
            <option value="CNY">
              CNY
            </option>
          </select>
          <div className="form__input-date-wrapper">
            <label className="visually-hidden" htmlFor="input-date">
              Введите дату
            </label>
            <input className="form__input-date" type="date" name="input-date" id="input-date" />
          </div>
          <button className="form__save-button" type="submit">
            Сохранить результат
          </button>
        </form>
      </div>
    </section>
  );
};

export {ConverterForm};

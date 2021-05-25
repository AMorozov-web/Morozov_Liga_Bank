import React from 'react';

import './form.scss';

const Form = () => {

  return (
    <form className="form converter__form">
      <div className="form__input-start-wrapper">
        <label className="form__input-start-label" htmlFor="input-start">
          У меня есть
        </label>
        <input className="form__input-start" type="text" id="input-start" name="input-start" defaultValue="1000" />
      </div>
      <div className="form__select-start-wrapper">
        <select className="form__select-start" name="select-start" id="select-start" defaultValue="RUB">
          <option value="USD">
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
      </div>
      <button className="form__change-values-button" type="button" aria-label="swap values">
        <svg width="56" height="36" viewBox="0 0 56 36" fill="none">
          <path d="M19 1L3 9L19 17" strokeWidth="2"/>
          <path d="M3 9C9.66667 9 33.3241 9 44.6667 9L53 9" strokeWidth="2"/>
          <path d="M37 35L53 27L37 19" strokeWidth="2"/>
          <path d="M53 27C46.3333 27 22.6759 27 11.3333 27H3" strokeWidth="2"/>
        </svg>
      </button>
      <div className="form__input-result-wrapper">
        <label className="form__input-result-label" htmlFor="input-result">
          Хочу приобрести
        </label>
        <input className="form__input-result" type="text" id="input-result" name="input-result" defaultValue="13,1234" />
      </div>
      <div className="form__select-result-wrapper">
        <select className="form__select-result" name="select-result" id="select-result" defaultValue="USD">
          <option value="USD">
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
      </div>
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
  );
};

export {Form};

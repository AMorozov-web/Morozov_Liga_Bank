import React from 'react';

import './navigation.scss';

const Navigation = () => {

  return (
    <nav className="navigation header__page-navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            Услуги
          </a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            Рассчитать кредит
          </a>
        </li>
        <li className="navigation__item navigation__item--current">
          <a href="#" className="navigation__link">
            Конвертер валют
          </a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            Контакты
          </a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            Задать вопрос
          </a>
        </li>
      </ul>
    </nav>
  );
};

export {Navigation};

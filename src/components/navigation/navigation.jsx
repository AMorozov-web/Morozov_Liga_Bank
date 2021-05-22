import React from 'react';

const Navigation = () => {

  return (
    <nav className="navigation header__page-navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            <span className="navigation__span">
              Услуги
            </span>
          </a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            <span className="navigation__span">
              Рассчитать кредит
            </span>
          </a>
        </li>
        <li className="navigation__item navigation__item--current">
          <a href="#" className="navigation__link">
            <span className="navigation__span">
              Конвертер валют
            </span>
          </a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            <span className="navigation__span">
              Контакты
            </span>
          </a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            <span className="navigation__span">
              Задать вопрос
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export {Navigation};

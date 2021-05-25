import React from 'react';

import './promo.scss';

const Promo = () => {
  return (
    <section className="promo converter__promo">
      <div className="promo__container">
        <h2 className="promo__title">
          Лига Банк
        </h2>
        <p className="promo__description">
          Кредиты на любой случай
        </p>
        <a href="" className="promo__link">
          Рассчитать кредит
        </a>
      </div>
    </section>
  );
};

export {Promo};

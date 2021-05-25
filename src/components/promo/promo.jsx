import React from 'react';

import './promo';

const Promo = () => {
  return (
    <section className="promo converter__promo">
      <div className="promo__container">
        <h2 className="promo__heading">
          Лига Банк
        </h2>
        <p className="promo__description">
          Кредиты на любой случай
        </p>
        <button className="promo__button">
          Рассчитать кредит
        </button>
      </div>
    </section>
  );
};

export {Promo};

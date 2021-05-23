import React from 'react';

import './logo.scss';

const Logo = () => {

  return (
    <a href="" className="logo header__logo" aria-label="Go to main page">
      <div className="logo__wrapper">
        <img className="logo__image" src="img/logo.svg" alt="Liga-Bank logo" />
      </div>
    </a>
  );
};

export {Logo};

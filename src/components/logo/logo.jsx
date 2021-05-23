import React from 'react';
import PropTypes from 'prop-types';

import './logo.scss';

const getClassName = (position) => {
  switch (position) {
    case `header`:
      return `header__logo`;
    case `footer`:
      return `footer__logo`;
  }

  return ``;
};

const Logo = ({position}) => {

  return (
    <a href="" className={`logo ${getClassName(position)}`} aria-label="Go to main page">
      <div className="logo__wrapper">
        <img className="logo__image" src="img/logo.svg" alt="Liga-Bank logo" />
      </div>
    </a>
  );
};

Logo.propTypes = {
  position: PropTypes.string.isRequired
};

export {Logo};

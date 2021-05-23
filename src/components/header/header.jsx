import React from 'react';
import {Logo} from '../logo/logo';
import {Navigation} from '../navigation/navigation';
import {UserBlock} from '../user-block/user-block';

import './header.scss';

const Header = () => {

  return (
    <section className="header page-body__header">
      <div className="header__container">
        <Logo />
        <Navigation />
        <UserBlock />
      </div>
    </section>
  );
};

export {Header};

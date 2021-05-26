import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectIsPairsLoaded} from '../../store/selectors';
import {fetchPairs} from '../../store/api-actions';
import {Header} from '../header/header';
import {Main} from '../main/main';
import {Footer} from '../footer/footer';

import './main-page.scss';

const MainPage = () => {
  const isPairsLoaded = useSelector(selectIsPairsLoaded);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isPairsLoaded) {
      dispatch(fetchPairs());
    }
  }, []);

  if (!isPairsLoaded) {
    console.log(`Not loaded`);
  }

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export {MainPage};

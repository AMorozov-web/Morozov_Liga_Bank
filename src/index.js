import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createAPI} from "./services/api";
import {configureStore} from '@reduxjs/toolkit';
import {mainReducer} from './store/reducer';
import {App} from './components/app/app';
import {fetchPairs} from './store/api-actions';

const api = createAPI(() => store.dispatch(fetchPairs()));

const store = configureStore({
  reducer: mainReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },
    }),
});

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);

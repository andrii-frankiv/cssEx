import React from "react";
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux'
import reducer from './modules/redux';
import rootSaga from './modules/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);





export default function configure(app) {

  return (
    <Provider store={store}>
      {app}
    </Provider>
  )
}
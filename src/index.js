import App from './components/app/app';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import questions from './mocks/questions';

import {reducer, initialState} from './reducers/reducer';

const store = createStore(reducer, initialState);

const init = () => {
  const config = {
    gameTime: 7,
    errorCount: 3
  };

  ReactDOM.render(
      <Provider store={store}>
        <App
          errorCount={config.errorCount}
          gameTime={config.gameTime}
          questions={questions}
        />
      </Provider>,
      document.querySelector(`.main`)
  );
};

init();

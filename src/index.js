import {App} from './components/app/app';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

import questions from './mocks/questions';

import {reducer, initialState} from './reducer';

const store = createStore(reducer, initialState);

const init = () => {
  const config = {
    gameTime: 7,
    errorCount: 4
  };

  ReactDOM.render(
      <App
        errorCount={config.errorCount}
        gameTime={config.gameTime}
        questions={questions}
      />,
      document.querySelector(`.main`)
  );
};

init();

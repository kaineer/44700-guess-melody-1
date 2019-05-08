import {App} from './components/app/app';
import React from 'react';
import ReactDOM from 'react-dom';

import questions from './mocks/questions';

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

import {App} from './components/app/app';
import React from 'react';
import ReactDOM from 'react-dom';

const init = () => {
  const config = {
    gameTime: 5,
    errorCount: 3
  };

  ReactDOM.render(
      <App
        errorCount={config.errorCount}
        gameTime={config.gameTime}
      />,
      document.querySelector(`.main`)
  );
};

init();

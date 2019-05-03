import {App} from './components/app/app';
import React from 'react';
import ReactDOM from 'react-dom';

const init = () => {
  const config = {
    gameTime: 7,
    errorCount: 4
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

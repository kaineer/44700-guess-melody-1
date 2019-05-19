// src/components/game-header/game-header.jsx

import React, {Component} from 'react';
import {func} from 'prop-types';
import Mistakes from '../mistakes/mistakes';

export class GameHeader extends Component {
  render() {
    const {onBackClick} = this.props;

    return (
      <header className="game__header">
        <a className="game__back" href="#" onClick={onBackClick}>
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
        </a>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370"
            style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}}
          />
        </svg>

        <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
          <span className="timer__mins">05</span>
          <span className="timer__dots">:</span>
          <span className="timer__secs">00</span>
        </div>

        <Mistakes />
      </header>
    );
  }
}

GameHeader.propTypes = {
  onBackClick: func
};

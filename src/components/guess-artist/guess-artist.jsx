// src/components/guess-artist/guess-artist.jsx

import React, {Component} from 'react';
import {string, shape, arrayOf} from 'prop-types';
import {GuessArtistItem} from '../guess-artist-item/guess-artist-item';

export class GuessArtist extends Component {
  render() {
    const {answers} = this.props;

    return (
      <section className="game game--artist">
        <header className="game__header">
          <a className="game__back" href="#">
            <span className="visually-hidden">Сыграть ещё раз</span>
            <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
          </a>

          <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
            <circle className="timer__line" cx="390" cy="390" r="370" style="filter: url(#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center" />
          </svg>

          <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
            <span className="timer__mins">05</span>
            <span className="timer__dots">:</span>
            <span className="timer__secs">00</span>
          </div>

          <div className="game__mistakes">
            <div className="wrong"></div>
            <div className="wrong"></div>
            <div className="wrong"></div>
          </div>
        </header>

        <section className="game__screen">
          <h2 className="game__title">Кто исполняет эту песню?</h2>
          <div className="game__track">
            <button className="track__button track__button--play" type="button"></button>
            <audio></audio>
          </div>

          <form className="game__artist">
            {answers.map((answer, orderId) => (
              <GuessArtistItem
                key={orderId}
                src={answer.src}
                artist={answer.artist}
                orderId={orderId}
              />
            ))}
          </form>
        </section>
      </section>
    );
  }
}

GuessArtist.propTypes = {
  song: shape({
    artist: string,
    src: string
  }),
  answers: arrayOf(shape({
    picture: string,
    artist: string
  }))
};

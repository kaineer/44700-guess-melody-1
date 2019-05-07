// src/components/guess-artist/guess-artist.jsx

import React, {Component} from 'react';
import {string, shape, func, arrayOf} from 'prop-types';
import {GameHeader} from '../game-header/game-header';
import {GuessArtistItem} from '../guess-artist-item/guess-artist-item';

export class GuessArtist extends Component {
  render() {
    const {question: {answers}, onSubmit} = this.props;

    return (
      <section className="game game--artist">
        <GameHeader />

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
                onClick={onSubmit}
              />
            ))}
          </form>
        </section>
      </section>
    );
  }
}

GuessArtist.propTypes = {
  question: shape({
    song: shape({
      artist: string,
      src: string
    }),
    answers: arrayOf(shape({
      picture: string,
      artist: string
    }))
  }),
  onSubmit: func
};

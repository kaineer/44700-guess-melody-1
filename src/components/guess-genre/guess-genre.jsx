// src/components/guess-genre/guess-genre.jsx

import React, {Component} from 'react';
import {number, func, shape} from 'prop-types';
import {GameHeader} from '../game-header/game-header';
import {GuessGenreItem} from '../guess-genre-item/guess-genre-item';

import {genreQuestionType} from '../../prop-types';

export class GuessGenre extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      question: {answers},
      activePlayer,
      onUserAnswer,
      onToggleAnswer,
      onTogglePlaying,
    } = this.props;

    return (
      <section className="game game--genre">
        <GameHeader />

        <section className="game__screen">
          <h2 className="game__title">Выберите инди-рок треки</h2>
          <form className="game__tracks">
            {answers.map(({src, genre}, orderId) => (
              <GuessGenreItem
                key={orderId}
                src={src}
                genre={genre}
                orderId={orderId}
                isPlaying={orderId === activePlayer}
                onTogglePlaying={(flag) => onTogglePlaying(flag, orderId)}
                onChange={() => onToggleAnswer(orderId)}
              />
            ))}

            <button className="game__submit button" type="submit" onClick={(e) => {
              e.preventDefault();
              onUserAnswer();
            }}>Ответить</button>
          </form>
        </section>
      </section>
    );
  }
}

GuessGenre.propTypes = {
  question: shape(genreQuestionType),
  activePlayer: number.isRequired,
  onUserAnswer: func.isRequired,
  onToggleAnswer: func.isRequired,
  onTogglePlaying: func.isRequired,
};

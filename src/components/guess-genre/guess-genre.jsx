// src/components/guess-genre/guess-genre.jsx

import React, {Component} from 'react';
import {func, shape} from 'prop-types';
import {GameHeader} from '../game-header/game-header';
import {GuessGenreItem} from '../guess-genre-item/guess-genre-item';

import {genreQuestionType} from '../../prop-types';

export class GuessGenre extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activePlayer: -1, // none
    };
  }

  render() {
    const {question: {answers}, onUserAnswer, onToggleAnswer} = this.props;
    const {activePlayer} = this.state;

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
                onTogglePlaying={(flag) => this.setState({
                  activePlayer: flag ? orderId : -1
                })}
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
  onUserAnswer: func.isRequired,
  onToggleAnswer: func.isRequired,
};

// src/components/guess-genre/guess-genre.jsx

import React, {Component} from 'react';
import {string, func, shape, arrayOf} from 'prop-types';
import {GameHeader} from '../game-header/game-header';
import {GuessGenreItem} from '../guess-genre-item/guess-genre-item';

export class GuessGenre extends Component {
  render() {
    const {question: {answers}, onSubmit} = this.props;

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
              />
            ))}

            <button className="game__submit button" type="submit" onClick={onSubmit}>Ответить</button>
          </form>
        </section>
      </section>
    );
  }
}

GuessGenre.propTypes = {
  question: shape({
    genre: string,
    answers: arrayOf(shape({
      src: string,
      genre: string
    })),
  }),
  onSubmit: func
};

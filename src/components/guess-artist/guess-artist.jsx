// src/components/guess-artist/guess-artist.jsx

import React, {Component} from 'react';
import {shape, func} from 'prop-types';
import {GameHeader} from '../game-header/game-header';
import {GuessArtistItem} from '../guess-artist-item/guess-artist-item';
import {AudioPlayer} from '../audio-player/audio-player';

import {artistQuestionType} from '../../prop-types';

export class GuessArtist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
    };
  }

  render() {
    const {question, onUserAnswer} = this.props;
    const {answers, song: {src}} = question;
    const {isPlaying} = this.state;

    return (
      <section className="game game--artist">
        <GameHeader />

        <section className="game__screen">
          <h2 className="game__title">Кто исполняет эту песню?</h2>
          <div className="game__track">
            <AudioPlayer
              {...{src, isPlaying}}
              onTogglePlaying={
                (flag) => this.setState({isPlaying: flag})
              }
            />
          </div>

          <form className="game__artist">
            {answers.map((answer, orderId) => (
              <GuessArtistItem
                key={`guess-artist-${orderId}`}
                {...answer}
                {...{orderId, question, onUserAnswer}}
              />
            ))}
          </form>
        </section>
      </section>
    );
  }
}

GuessArtist.propTypes = {
  question: shape(artistQuestionType),
  onUserAnswer: func.isRequired
};

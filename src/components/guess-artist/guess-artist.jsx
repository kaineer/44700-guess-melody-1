// src/components/guess-artist/guess-artist.jsx

import React, {Component} from 'react';
import {shape, func, bool} from 'prop-types';
import {GameHeader} from '../game-header/game-header';
import {GuessArtistItem} from '../guess-artist-item/guess-artist-item';
import {AudioPlayer} from '../audio-player/audio-player';
import {withAudioPlayer} from '../../hocs/with-audio-player/with-audio-player';

const AudioPlayerWrapped = withAudioPlayer(AudioPlayer);

import {artistQuestionType} from '../../prop-types';

export class GuessArtist extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {question, isPlaying, onUserAnswer, onTogglePlaying} = this.props;
    const {answers, song: {src}} = question;

    return (
      <section className="game game--artist">
        <GameHeader />

        <section className="game__screen">
          <h2 className="game__title">Кто исполняет эту песню?</h2>
          <div className="game__track">
            <AudioPlayerWrapped
              {...{src, isPlaying, onTogglePlaying}}
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
  isPlaying: bool.isRequired,
  onTogglePlaying: func.isRequired,
  question: shape(artistQuestionType),
  onUserAnswer: func.isRequired
};

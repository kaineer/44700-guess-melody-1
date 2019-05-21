import React from 'react';
import {string, number, bool, func} from 'prop-types';
import {AudioPlayer} from '../audio-player/audio-player';
import {withAudioPlayer} from '../../hocs/with-audio-player/with-audio-player';

const AudioPlayerWrapped = withAudioPlayer(AudioPlayer);

export const GuessGenreItem = ({
  src, orderId, isPlaying, onTogglePlaying, onChange
}) => (
  <div className="track">
    <AudioPlayerWrapped {...{src, isPlaying, onTogglePlaying}} />

    <div className="game__answer">
      <input
        className="game__input visually-hidden"
        type="checkbox"
        name="answer"
        value={`answer-${orderId}`}
        id={`answer-${orderId}`}
        onChange={onChange}
      />
      <label className="game__check" htmlFor={`answer-${orderId}`}>Отметить</label>
    </div>
  </div>
);

GuessGenreItem.propTypes = {
  src: string.isRequired,
  genre: string.isRequired,
  orderId: number.isRequired,
  isPlaying: bool.isRequired,
  onTogglePlaying: func.isRequired,
  onChange: func.isRequired
};

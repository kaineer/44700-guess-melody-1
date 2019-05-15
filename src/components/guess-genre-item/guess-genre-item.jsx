import React from 'react';
import {string, number} from 'prop-types';
import {AudioPlayer} from '../audio-player/audio-player';

export const GuessGenreItem = ({src, orderId}) => (
  <div className="track">
    <AudioPlayer {...{src}} />

    <button className="track__button track__button--play" type="button"></button>
    <div className="track__status">
      <audio></audio>
    </div>
    <div className="game__answer">
      <input className="game__input visually-hidden" type="checkbox" name="answer" value={`answer-${orderId}`} id={`answer-${orderId}`} />
      <label className="game__check" htmlFor={`answer-${orderId}`}>Отметить</label>
    </div>
  </div>
);

GuessGenreItem.propTypes = {
  src: string,
  genre: string,
  orderId: number
};

import React from 'react';
import {string, number, func} from 'prop-types';

export const GuessArtistItem = ({question, artist, picture, orderId, onUserAnswer}) => (
  <div className="artist">
    <input
      className="artist__input visually-hidden"
      type="radio"
      name="answer"
      value={`artist-${orderId}`}
      id={`answer-${orderId}`}
      onClick={() => onUserAnswer(question, {artist})}
    />
    <label className="artist__name" htmlFor={`answer-${orderId}`}>
      <img className="artist__picture" src={picture} alt={artist} />
      {artist}
    </label>
  </div>
);

GuessArtistItem.propTypes = {
  artist: string.isRequired,
  picture: string.isRequired,
  orderId: number.isRequired,
  onUserAnswer: func.isRequired,
};

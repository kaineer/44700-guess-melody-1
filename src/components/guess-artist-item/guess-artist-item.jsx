import React from 'react';
import {number, string, func} from 'prop-types';

export const GuessArtistItem = ({artist, picture, orderId, onUserAnswer}) => (
  <div className="artist">
    <input
      className="artist__input visually-hidden"
      type="radio"
      name="answer"
      value={`artist-${orderId}`}
      id={`answer-${orderId}`}
      onClick={() => onUserAnswer({artist})}
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

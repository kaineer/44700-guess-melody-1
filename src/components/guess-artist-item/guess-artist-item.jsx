import React from 'react';
import {string, number} from 'prop-types';

export const GuessArtistItem = ({artist, src, orderId}) => (
  <div className="artist">
    <input className="artist__input visually-hidden" type="radio" name="answer" value={`artist-${orderId}`} id={`answer-${orderId}`} />
    <label className="artist__name" htmlFor={`answer-${orderId}`}>
      <img className="artist__picture" src={src} alt={artist} />
      {artist}
    </label>
  </div>
);

GuessArtistItem.propTypes = {
  artist: string.isRequired,
  src: string.isRequired,
  orderId: number.isRequired
};

// src/prop-types.js

import {string, shape, arrayOf} from 'prop-types';

export const songType = {
  artist: string.isRequired,
  src: string.isRequired
};

export const artistAnswerType = {
  artist: string.isRequired,
  picture: string.isRequired,
};

export const artistQuestionType = {
  song: shape(songType),
  answers: arrayOf(shape(artistAnswerType)),
};

const genreAnswerType = {
  src: string.isRequired,
  genre: string.isRequired,
};

export const genreQuestionType = {
  genre: string.isRequired,
  answers: arrayOf(shape(genreAnswerType))
};

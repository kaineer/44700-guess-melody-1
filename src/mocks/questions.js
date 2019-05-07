// src/mocks/questions.js

const genreQuestion = {
  type: `genre`,
  genre: `rock`,
  answers: [
    {
      src: ``,
      genre: `rock`
    },
    {
      src: ``,
      genre: `jazz`
    },
    {
      src: ``,
      genre: `blues`
    }
  ]
};

const artistQuestion = {
  type: `artist`,
  song: {
    artist: `One`,
    src: ``
  },
  answers: [
    {
      picture: ``,
      artist: `One`
    },
    {
      picture: ``,
      artist: `Two`
    }
  ]
};

module.exports = [
  genreQuestion,
  artistQuestion
];

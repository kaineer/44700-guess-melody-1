// src/mocks/questions.js

const ugandaAnthem = (
  `https://upload.wikimedia.org/wikipedia/`.concat(
      `commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`
  )
);

const genreQuestion = {
  type: `genre`,
  genre: `rock`,
  answers: [
    {
      src: ugandaAnthem,
      genre: `rock`
    },
    {
      src: ugandaAnthem,
      genre: `jazz`
    },
    {
      src: ugandaAnthem,
      genre: `blues`
    }
  ]
};

const artistQuestion = {
  type: `artist`,
  song: {
    artist: `One`,
    src: ugandaAnthem
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

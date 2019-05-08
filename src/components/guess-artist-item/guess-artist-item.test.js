import React from 'react';
import {GuessArtistItem} from './guess-artist-item';
import {create} from 'react-test-renderer';

const question = {
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

describe(`GuessArtistItem`, () => {
  it(`should render correctly`, () => {
    const {answers: [{picture, artist}]} = question;
    const clickHandler = () => null;

    const tree = create(
      <GuessArtistItem
        artist={artist}
        picture={picture}
        orderId={42}
        key={42}
        onClick={clickHandler}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

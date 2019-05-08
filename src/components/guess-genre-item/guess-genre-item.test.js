import React from 'react';
import {GuessGenreItem} from './guess-genre-item';
import {create} from 'react-test-renderer';

const src = 'https://foobar.com/1/2/3';
const genre = 'jazz';

describe(`GuessGenreItem`, () => {
  it(`should render correctly`, () => {
    const tree = create(
      <GuessGenreItem
        genre={genre}
        src={src}
        orderId={42}
        key={42}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

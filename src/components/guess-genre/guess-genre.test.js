import React from 'react';
import {GuessGenre} from './guess-genre';
import {create} from 'react-test-renderer';

import questions from '../../mocks/questions';

const [genreQuestion, _] = questions;

describe(`GuessGenre`, () => {
  it(`should render correctly`, () => {
    const tree = create(
        <GuessGenre
          question={genreQuestion}
          onSubmit={() => null}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

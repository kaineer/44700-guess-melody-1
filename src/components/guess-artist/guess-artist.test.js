import React from 'react';
import {GuessArtist} from './guess-artist';
import {create} from 'react-test-renderer';

import questions from '../../mocks/questions';

const [_, artistQuestion] = questions;

describe(`GuessArtist`, () => {
  it(`should render correctly`, () => {
    const tree = create(
        <GuessArtist
          question={artistQuestion}
          onSubmit={() => null}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

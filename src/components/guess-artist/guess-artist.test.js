import React from 'react';

import {GuessArtist} from './guess-artist';
import {create} from 'react-test-renderer';

import questions from '../../mocks/questions';
import {MockProvider} from '../../mocks/store';

const [_, artistQuestion] = questions;

describe(`GuessArtist`, () => {
  it(`should render correctly`, () => {
    const tree = create(
      <MockProvider>
        <GuessArtist
          question={artistQuestion}
          onUserAnswer={jest.fn()}
          isPlaying={false}
          onTogglePlaying={jest.fn()}
        />
      </MockProvider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

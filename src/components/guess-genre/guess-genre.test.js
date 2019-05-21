import React from 'react';
import {GuessGenre} from './guess-genre';
import {create} from 'react-test-renderer';

import questions from '../../mocks/questions';

const [genreQuestion, _] = questions;

import {MockProvider} from '../../mocks/store';

describe(`GuessGenre`, () => {
  it(`should render correctly`, () => {
    const tree = create(
      <MockProvider>
        <GuessGenre
          question={genreQuestion}
          onUserAnswer={jest.fn()}
          activePlayer={-1}
          onToggleAnswer={jest.fn()}
          onTogglePlaying={jest.fn()}
        />
      </MockProvider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

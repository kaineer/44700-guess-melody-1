import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import {GuessGenre} from './guess-genre';
import {MockProvider} from '../../mocks/store';

import questions from '../../mocks/questions';

const [genreQuestion, _] = questions;

describe(`GuessGenre e2e`, () => {
  let screen;
  let submitHandler;

  beforeEach(() => {
    submitHandler = jest.fn();

    screen = mount(
      <MockProvider>
        <GuessGenre
          onUserAnswer={submitHandler}
          question={genreQuestion}
          activePlayer={-1}
          onToggleAnswer={jest.fn()}
          onTogglePlaying={jest.fn()}
        />
      </MockProvider>
    );
  });

  it(`should not call submitHandler yet`, () => {
    expect(submitHandler).toHaveBeenCalledTimes(0);
  });

  describe(`After result is submitted`, () => {
    beforeEach(() => {
      const button = screen.find(`.game__submit`);
      button.simulate(`click`);
    });

    it(`should call submitHandler one time`, () => {
      expect(submitHandler).toHaveBeenCalledTimes(1);
    });
  })
});

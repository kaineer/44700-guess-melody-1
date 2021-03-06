import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {GuessArtist} from './guess-artist';

import questions from '../../mocks/questions';

const [_, artistQuestion] = questions;

configure({adapter: new Adapter()});

import {MockProvider} from '../../mocks/store';

describe(`GuessArtist e2e`, () => {
  let screen;
  let submitHandler;

  beforeEach(() => {
    submitHandler = jest.fn();

    screen = mount(
      <MockProvider>
        <GuessArtist
          question={artistQuestion}
          onUserAnswer={submitHandler}

          isPlaying={false}
          onTogglePlaying={jest.fn()}
        />
      </MockProvider>
    );
  });

  it(`should not call submitHandler yet`, () => {
    expect(submitHandler).toHaveBeenCalledTimes(0);
  });

  describe(`when clicked first option`, () => {
    beforeEach(() => {
      screen.find(`#answer-0`).simulate(`click`);
    });

    it(`should call submitHandler`, () => {
      expect(submitHandler).toHaveBeenCalledTimes(1);
    });
  });

  describe(`when clicked second option`, () => {
    beforeEach(() => {
      screen.find(`#answer-1`).simulate(`click`);
    });

    it(`should call submitHandler`, () => {
      expect(submitHandler).toHaveBeenCalledTimes(1);
    });
  });
});
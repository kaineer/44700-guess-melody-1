// src/reducers/action-creators.test.js

import {ActionTypes} from './action-types';
const {RESET_STEP, INCREMENT_STEP} = ActionTypes;

import {ActionCreators} from './action-creators';
const {resetStep, incrementStep, incrementMistakes} = ActionCreators;

describe(`ResetStep()`, () => {
  it(`should return reset step action`, () => {
    expect(resetStep().type).toEqual(RESET_STEP);
  });
});

describe(`IncrementStep()`, () => {
  it(`should return increase step action`, () => {
    expect(incrementStep().type).toEqual(INCREMENT_STEP);
  });
});

describe(`IncrementMistakes()`, () => {
  it(`should not add mistake for correct answer`, () => {
    expect(incrementMistakes({
      type: `artist`, song: {artist: `Foo`}
    }, {artist: `Foo`}).payload).toEqual(0);

    expect(incrementMistakes({
      type: `genre`, genre: `jazz`, answers: [
        {genre: `rock`}, {genre: `jazz`}
      ]
    }, [false, true]).payload).toEqual(0);
  });

  it(`should add mistake for wrong answer`, () => {
    expect(incrementMistakes({
      type: `artist`, song: {artist: `Foo`}
    }, {artist: `Bar`}).payload).toEqual(1);

    expect(incrementMistakes({
      type: `genre`, genre: `jazz`, answers: [
        {genre: `rock`}, {genre: `jazz`}
      ]
    }, [true, false]).payload).toEqual(1);
  });
});

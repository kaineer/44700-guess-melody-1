// src/reducers/reducer.test.js

import {reducer, initialState} from './reducer';
import {ActionTypes} from './action-types';

const {
  RESET_STEP,
  INCREMENT_STEP,
  INCREMENT_MISTAKES
} = ActionTypes;

it(`should return initial state when called without correct action`, () => {
  expect(reducer(initialState, {type: `FOOBAR`})).toEqual(initialState);
});

it(`should increase step for INCREMENT_STEP action`, () => {
  expect(reducer(initialState, {type: INCREMENT_STEP})).toEqual({
    step: 0,
    mistakes: 0
  });
});

it(`should reset steps for RESET_STEP action`, () => {
  expect(reducer({
    step: 10,
    mistakes: 3
  }, {type: RESET_STEP})).toEqual(initialState);
});

it(`should increment mistakes for INCREMENT_MISTAKES action`, () => {
  expect(reducer({
    step: 3,
    mistakes: 2
  }, {type: INCREMENT_MISTAKES})).toEqual({
    step: 3,
    mistakes: 3
  });
});

it(`should not increment mistakes for INCREMENT_MISTAKES action with 0 as payload`, () => {
  expect(reducer({
    step: 3,
    mistakes: 2
  }, {type: INCREMENT_MISTAKES, payload: 0})).toEqual({
    step: 3,
    mistakes: 2
  });
});

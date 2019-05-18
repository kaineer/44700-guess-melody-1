// src/reducers/action-creators.test.js

import {ActionTypes} from './action-types';
const {RESET_STEP, INCREMENT_STEP, INCREMENT_MISTAKES} = ActionTypes;

import {ActionCreators} from './action-creators';
const {ResetStep, IncrementStep, IncrementMistakes} = ActionCreators;

describe(`ResetStep()`, () => {
  it(`should return reset step action`, () => {
    expect(ResetStep()).toEqual({type: RESET_STEP});
  });
});

describe(`IncreaseStep()`, () => {
  it(`should return increase step action`, () => {
    expect(IncrementStep()).toEqual({type: INCREMENT_STEP});
  });
});
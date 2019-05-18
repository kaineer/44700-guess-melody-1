// src/reducers/reducer.js

export const initialState = {
  step: -1,
  mistakes: 0
};

Object.freeze(initialState);

import questions from '../mocks/questions';

import {ActionTypes} from './action-types';
const {RESET_STEP, INCREMENT_STEP, INCREMENT_MISTAKES} = ActionTypes;


const reducers = {
  [INCREMENT_STEP]: (prevState, {payload = 1}) => {
    const newStep = prevState.step + payload;

    if (newStep >= questions.length) {
      return initialState;
    } else {
      return {
        ...prevState, step: newStep,
      };
    }
  },
  [INCREMENT_MISTAKES]: (prevState, {payload = 1}) => ({
    ...prevState, mistakes: prevState.mistakes + payload
  }),
  [RESET_STEP]: (prevState, action) => initialState
};

export const reducer = (prevState, action) => {
  const fn = reducers[action.type];

  if (fn) {
    return fn(prevState, action);
  }

  return prevState;
};

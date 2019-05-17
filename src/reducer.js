// src/reducer.js

const initialState = {
  step: -1,
  mistakes: 0
};

const ActionTypes = {
  RESET_STEP: `RESET_STEP`,
  INCREMENT_STEP: `INCREMENT_STEP`,
  INCREMENT_MISTAKE: `INCREMENT_MISTAKE`
};

const reducers = {
  INCREMENT_STEP: (prevState, {payload = 1}) => ({
    ...prevState, step: prevState.step + payload
  }),
  INCREMENT_MISTAKE: (prevState, {payload = 1}) => ({
    ...prevState, mistakes: prevState.mistakes + payload
  }),
  RESET_STEP: (prevState, action) => initialState
};

export const reducer = (prevState, action) => {
  const fn = reducers[action.type];

  if (fn) {
    return fn(prevState, action);
  }

  return prevState;
};

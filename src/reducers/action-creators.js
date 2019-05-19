// src/reducers/action-creators.js

import {ActionTypes} from './action-types';
const {RESET_STEP, INCREMENT_STEP, INCREMENT_MISTAKES} = ActionTypes;

const resetStep = () => ({type: RESET_STEP});
const incrementStep = () => ({type: INCREMENT_STEP});
const incrementMistakes = (question, userAnswer) => {
  if (question) {
    const {type} = question;
    let correctAnswer;

    switch (type) {
      case `artist`:
        correctAnswer = question.song.artist === userAnswer.artist;
        break;
      case `genre`:
        correctAnswer = userAnswer.every((flag, i) => {
          const answer = question.answers[i];
          return (flag === (answer.genre === question.genre));
        });
        break;
    }

    return {
      type: INCREMENT_MISTAKES,
      payload: correctAnswer ? 0 : 1,
    };
  } else {
    return {type: INCREMENT_MISTAKES, payload: 0};
  }
};

export const ActionCreators = {
  resetStep, incrementStep, incrementMistakes
};

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {number, array, func} from 'prop-types';

import {ActionCreators} from '../../reducers/action-creators';

const {
  incrementStep,
  incrementMistakes
} = ActionCreators;

const {isRequired: requiredNumber} = number;

import {WelcomeScreen} from '../welcome-screen/welcome-screen';
import {GuessArtist} from '../guess-artist/guess-artist';
import {GuessGenre} from '../guess-genre/guess-genre';

export class App extends Component {
  render() {
    const {gameTime, errorCount, questions, step, onUserAnswer} = this.props;
    const question = questions[step];

    if (step > -1) {
      switch (question.type) {
        case `artist`:
          return (
            <GuessArtist
              {...{onUserAnswer, question}}
            />
          );
        case `genre`:
          return (
            <GuessGenre
              {...{onUserAnswer, question}}
            />
          );
      }
    }

    return (
      <WelcomeScreen
        time={gameTime}
        errorCount={errorCount}
        onClick={onUserAnswer}
      />
    );
  }
}

App.propTypes = {
  gameTime: requiredNumber,
  errorCount: requiredNumber,
  questions: array,
  step: number.isRequired,
  mistakes: number.isRequired,
  onUserAnswer: func.isRequired
};

const mapStateToProps = ({step, mistakes}, ownProps) => Object.assign({}, ownProps, {
  step, mistakes
});

const mapDispatchToProps = (dispatch) => ({
  onUserAnswer: (question, userAnswer) => {
    dispatch(incrementStep());
    dispatch(incrementMistakes(question, userAnswer));
  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

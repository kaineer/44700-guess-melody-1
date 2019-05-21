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

import {withIsPlaying} from '../../hocs/with-is-playing/with-is-playing';
import {withUserAnswer} from '../../hocs/with-user-answer/with-user-answer';

const GuessArtistWrapped = withIsPlaying(GuessArtist);
const GuessGenreWrapped = withUserAnswer(GuessGenre);

export class App extends Component {
  render() {
    const {gameTime, errorCount, questions, step, mistakes, onUserAnswer} = this.props;
    const question = questions[step];

    if (step > -1) {
      switch (question.type) {
        case `artist`:
          return (
            <GuessArtistWrapped
              onUserAnswer={(userAnswer) => onUserAnswer(question, userAnswer, mistakes, errorCount /* , questions.length */)}
              {...{question}}
            />
          );
        case `genre`:
          return (
            <GuessGenreWrapped
              onUserAnswer={(userAnswer) => onUserAnswer(question, userAnswer, mistakes, errorCount /* , questions.length */)}
              {...{question}}
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
  onUserAnswer: (question, userAnswer, mistakes, errorCount /* , length */) => {
    dispatch(incrementStep());
    dispatch(incrementMistakes(question, userAnswer, mistakes, errorCount));
  }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

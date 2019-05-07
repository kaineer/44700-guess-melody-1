import React, {Component} from 'react';
import {number, array} from 'prop-types';

const {isRequired: requiredNumber} = number;

import {WelcomeScreen} from '../welcome-screen/welcome-screen';
import {GuessArtist} from '../guess-artist/guess-artist';
import {GuessGenre} from '../guess-genre/guess-genre';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question: -1
    };
  }

  render() {
    const {gameTime, errorCount, questions} = this.props;
    const {question} = this.state;

    const goNextQuestion = () => {
      this.setState({
        question: question < questions.length - 1 ? question + 1 : -1
      });
    };

    if (this.state.question > -1) {
      const question = questions[this.state.question];

      switch (question.type) {
        case `artist`:
          return (
            <GuessArtist question={question} onSubmit={goNextQuestion} />
          );
        case `genre`:
          return (
            <GuessGenre question={question} onSubmit={goNextQuestion} />
          );
      }
    }

    return (
      <WelcomeScreen
        time={gameTime}
        errorCount={errorCount}
        onClick={goNextQuestion}
      />
    );
  }
}

App.propTypes = {
  gameTime: requiredNumber,
  errorCount: requiredNumber,
  questions: array
};

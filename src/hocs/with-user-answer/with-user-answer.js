// src/hocs/with-user-answer/with-user-answer.jsx

import React, {PureComponent} from 'react';

export const withUserAnswer = (Component) => {
  return class extends PureComponent {
    constructor(props) {
      super(props);

      const {question: {answers}} = props;

      this.state = {
        userAnswer: (new Array(answers.length)).fill(false)
      };

      this._onToggleAnswer = this._onToggleAnswer.bind(this);
    }

    render() {
      const {onUserAnswer} = this.props;

      return (
        <Component
          {...this.props}
          onToggleAnswer={this._onToggleAnswer}
          onUserAnswer={() => onUserAnswer(this.state.userAnswer)}
        />
      )
    }

    _onToggleAnswer(i) {
      const userAnswer = this.state.userAnswer.slice();
      userAnswer[i] = !userAnswer[i];
      this.setState({userAnswer});
    }
  };
};

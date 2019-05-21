// src/hocs/with-is-playing/with-is-playing.jsx

import React, {PureComponent} from 'react';

export const withIsPlaying = (Component) => {
  return class extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
      };
    }

    render() {
      return (
        <Component
          {...this.props}
          isPlaying={this.state.isPlaying}
          onTogglePlaying={
            (flag) => this.setState({isPlaying: flag})
          }
        />
      )
    }
  };
};
// src/hocs/with-active-player/with-active-player.jsx

import React, {PureComponent} from 'react';

export const withActivePlayer = (Component) => {
  return class extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activePlayer: -1,
      };
    }

    render() {
      const {activePlayer} = this.state;

      return (
        <Component
          {...this.props}
          {...{activePlayer}}
          onTogglePlaying={(flag, orderId) => {
            this.setState({
              activePlayer: flag ? orderId : -1
            })
          }}
        />
      )
    }
  };
};

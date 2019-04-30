import React from 'react';
import PropTypes from 'prop-types';

import {WelcomeScreen} from '../welcome-screen/welcome-screen';

export const App = ({gameTime, errorCount}) => (
  <WelcomeScreen
    time={gameTime}
    errorCount={errorCount}
  />
);

App.propTypes = {
  gameTime: PropTypes.number,
  errorCount: PropTypes.number
};

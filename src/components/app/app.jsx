import React from 'react';
import {number} from 'prop-types';

const {isRequired: requiredNumber} = number;

import {WelcomeScreen} from '../welcome-screen/welcome-screen';

export const App = ({gameTime, errorCount}) => (
  <WelcomeScreen
    time={gameTime}
    errorCount={errorCount}
  />
);

App.propTypes = {
  gameTime: requiredNumber,
  errorCount: requiredNumber,
};

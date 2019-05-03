import React from 'react';
import {WelcomeScreen} from './welcome-screen';
import {create} from 'react-test-renderer';

describe(`WelcomeScreen`, () => {
  it(`should render correctly`, () => {
    const tree = create(
        <WelcomeScreen
          time={5}
          errorCount={7}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

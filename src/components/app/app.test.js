import React from 'react';
import {App} from './app';
import {create} from 'react-test-renderer';

describe(`App`, () => {
  it(`should render correctly`, () => {
    const tree = create(
        <App
          gameTime={3}
          errorCount={11}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

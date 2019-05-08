import React from 'react';
import {GameHeader} from './game-header';
import {create} from 'react-test-renderer';

describe(`GameHeader`, () => {
  it(`should render correctly`, () => {
    const tree = create(
        <GameHeader
          onBackClick={() => null}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

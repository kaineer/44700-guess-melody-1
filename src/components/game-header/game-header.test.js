import React from 'react';
import {GameHeader} from './game-header';
import {create} from 'react-test-renderer';

import {MockProvider} from '../../mocks/store';

describe(`GameHeader`, () => {
  it(`should render correctly`, () => {
    const tree = create(
      <MockProvider>
        <GameHeader
          onBackClick={() => null}
        />
      </MockProvider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

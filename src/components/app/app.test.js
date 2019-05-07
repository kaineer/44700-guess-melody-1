import React from 'react';
import {App} from './app';
import {create} from 'react-test-renderer';

import questions from '../../mocks/questions';

describe(`App`, () => {
  let tree;

  beforeEach(() => {
    tree = create(
      <App
        gameTime={3}
        errorCount={11}
        questions={questions}
      />
    )
  });

  describe('Initial state', () => {
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
});

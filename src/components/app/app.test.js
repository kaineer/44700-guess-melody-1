import React from 'react';
import App from './app';
import {create} from 'react-test-renderer';

import questions from '../../mocks/questions';

import {MockProvider} from '../../mocks/store';

describe(`App`, () => {
  describe('Initial state', () => {
    it(`should render correctly`, () => {
      const tree = create(
        <MockProvider>
          <App
            gameTime={3}
            errorCount={11}
            questions={questions}
          />
        </MockProvider>
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});

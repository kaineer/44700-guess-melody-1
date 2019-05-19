import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './app';
import {MockProvider} from '../../mocks/store';

import questions from '../../mocks/questions';

configure({adapter: new Adapter()});

describe(`App e2e`, () => {
  let app;

  beforeEach(() => {
    app = mount(
      <MockProvider>
        <App
          gameTime={3}
          errorCount={11}
          questions={questions}
        />
      </MockProvider>
    );
  });

  describe('Initial state', () => {
    let button;

    beforeEach(() => {
      button = app.find(`.welcome__button`);
    });

    it(`should have a button`, () => {
      expect(button).toHaveLength(1);
    });
  });

  describe(`After welcome button clicked`, () => {
    beforeEach(() => {
      const button = app.find(`.welcome__button`);
      button.simulate(`click`);
      app.update();
    });

    it(`should not have welcome button anymore`, () => {
      const button = app.find(`.welcome__button`);
      expect(button).toHaveLength(0);
    });

    it(`should have «.game__title» element`, () => {
      const title = app.find('.game__title');
      expect(title).toHaveLength(1);
      expect(title.text()).toMatch('Выберите');
    });

    describe(`After submit button clicked`, () => {
      beforeEach(() => {
        const submit = app.find(`.game__submit`);
        submit.simulate(`click`);
        app.update();
      });

      it(`should switch to guess author screen`, () => {
        const title = app.find('.game__title');
        expect(title).toHaveLength(1);
        expect(title.text()).toMatch('Кто исполняет');
      });

      describe(`After variant clicked`, () => {
        beforeEach(() => {
          const variant = app.find(`#answer-0`);
          variant.simulate(`click`);
          app.update();
        });

        it(`should return to welcome screen`, () => {
          const button = app.find(`.welcome__button`);
          expect(button).toHaveLength(1);
        });
      })
    });
  });
});

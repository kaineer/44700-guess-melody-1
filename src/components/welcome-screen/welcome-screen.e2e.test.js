import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {WelcomeScreen} from './welcome-screen';

Enzyme.configure({adapter: new Adapter()});

describe(`WelcomeScreen e2e`, () => {
  let clickHandler;
  let screen;
  let button;

  beforeEach(() => {
    clickHandler = jest.fn();
    screen = shallow(
        <WelcomeScreen
          time={0}
          errorCount={0}
          onClick={clickHandler}
        />
    );
    button = screen.find(`.welcome__button`);
  });

  it(`should have a button`, () => {
    expect(button).toHaveLength(1);
  });

  describe(`before button is clicked`, () => {

    it(`should not call clickHandler`, () => {
      expect(clickHandler).toHaveBeenCalledTimes(0);
    });
  });

  describe(`after button is clicked`, () => {
    beforeEach(() => {
      button.simulate(`click`);
    });

    it(`should call clickHandler`, () => {
      expect(clickHandler).toHaveBeenCalledTimes(1);
    });
  });
});

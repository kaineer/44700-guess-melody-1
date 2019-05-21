import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {withActivePlayer} from './with-active-player';

configure({adapter: new Adapter()});

const MockComponent = () => <div />;

const WithActivePlayer = withActivePlayer(MockComponent);

it(`should change activePlayer property`, () => {
  const wrapper = shallow(<WithActivePlayer />);

  expect(wrapper.props().activePlayer).toEqual(-1);

  wrapper.props().onTogglePlaying(true, 5);
  expect(wrapper.props().activePlayer).toEqual(5);

  wrapper.props().onTogglePlaying(false, 7);
  expect(wrapper.props().activePlayer).toEqual(-1);
});
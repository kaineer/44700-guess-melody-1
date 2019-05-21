import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {withUserAnswer} from './with-user-answer';

configure({adapter: new Adapter()});

const MockComponent = () => <div />;

const WithUserAnswer = withUserAnswer(MockComponent);

it(`should change user answer`, () => {
  const wrapper = shallow(<WithUserAnswer question={{answers: [1, 2, 3, 4]}} />);

  expect(wrapper.state().userAnswer).toEqual([false, false, false, false]);

  wrapper.props().onToggleAnswer(1);
  expect(wrapper.state().userAnswer).toEqual([false, true, false, false]);

  wrapper.props().onToggleAnswer(2);
  expect(wrapper.state().userAnswer).toEqual([false, true, true, false]);

  wrapper.props().onToggleAnswer(2);
  wrapper.props().onToggleAnswer(1);
  expect(wrapper.state().userAnswer).toEqual([false, false, false, false]);
});

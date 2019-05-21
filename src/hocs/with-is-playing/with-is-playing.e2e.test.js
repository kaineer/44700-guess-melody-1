import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {withIsPlaying} from './with-is-playing';

configure({adapter: new Adapter()});

const MockComponent = () => <div />;

const WithIsPlaying = withIsPlaying(MockComponent);

it(`should set isPlaying to provided value`, () => {
  const wrapper = shallow(<WithIsPlaying />);

  expect(wrapper.props().isPlaying).toEqual(false);

  wrapper.props().onTogglePlaying(true);
  expect(wrapper.props().isPlaying).toEqual(true);

  wrapper.props().onTogglePlaying(false);
  expect(wrapper.props().isPlaying).toEqual(false);
});
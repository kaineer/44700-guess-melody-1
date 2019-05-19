// src/mocks/store.js

import React from 'react';
import {createStore} from 'redux';

import {initialState, reducer} from '../reducers/reducer';
import {Provider} from 'react-redux';
import {node} from 'prop-types';

const createMockStore = (state = initialState) => createStore(reducer, state);

export const MockProvider = ({state = initialState, children} = {}) => (
  <Provider store={createMockStore(state)}>
    {children}
  </Provider>
);

MockProvider.propTypes = {
  children: node.isRequired
};

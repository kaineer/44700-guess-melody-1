// src/components/mistakes.test.js

import React from 'react';
import {Mistakes} from './mistakes';
import {create} from 'react-test-renderer';

describe(`<Mistakes />`, () => {
  it(`should render correctly for no mistakes`, () => {
    const tree = create(
      <Mistakes
        mistakes={0}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should render correctly for three mistakes`, () => {
    const tree = create(
      <Mistakes
        mistakes={3}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

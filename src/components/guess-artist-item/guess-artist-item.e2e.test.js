import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {GuessArtistItem} from './guess-artist-item';

Enzyme.configure({adapter: new Adapter()});

const question = {
  type: `artist`,
  song: {
    artist: `One`,
    src: ``
  },
  answers: [
    {
      picture: ``,
      artist: `One`
    },
    {
      picture: ``,
      artist: `Two`
    }
  ]
};

describe(`GuessArtistItem e2e`, () => {
  let clickHandler;
  let screen;
  let link;

  beforeEach(() => {
    const {answers: [{picture, artist}]} = question;

    clickHandler = jest.fn();
    screen = shallow(
        <GuessArtistItem
          picture={picture}
          artist={artist}
          onUserAnswer={clickHandler}
          orderId={42}
        />
    );
    link = screen.find(`.artist__input`).first();
  });

  it(`should have a link`, () => {
    expect(link).toHaveLength(1);
  });

  describe(`before link is clicked`, () => {
    it(`should not call clickHandler`, () => {
      expect(clickHandler).toHaveBeenCalledTimes(0);
    });
  });

  describe(`after link is clicked`, () => {
    beforeEach(() => {
      link.simulate(`click`);
    });

    it(`should call clickHandler`, () => {
      expect(clickHandler).toHaveBeenCalledTimes(1);
    });

    it(`should call clickHandler with specified artist`, () => {
      expect(clickHandler).toHaveBeenCalledWith({artist: `One`});
    });
  });
});

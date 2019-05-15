import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {AudioPlayer, snapshotDummyURL} from './audio-player';

configure({adapter: new Adapter()});

describe('AudioPlayer e2e', () => {
  let player;
  let clickHandler;
  let button;

  describe('with «isPlaying» equal false', () => {
    beforeEach(() => {
      clickHandler = jest.fn();

      player = shallow(
        <AudioPlayer
          isPlaying={false}
          src={snapshotDummyURL}
          onTogglePlaying={clickHandler}
        />
      );

      button = player.find('.track__button');
    });

    it('should have a button', () => {
      expect(button.exists()).toBeTruthy();
    });

    // strange, but true :-/
    it('should have «track__button--play» class', () => {
      expect(button.hasClass('track__button--play')).toBeTruthy();
    });

    it('should not call clickHandler', () => {
      expect(clickHandler).toHaveBeenCalledTimes(0);
    });

    describe('after button is clicked', () => {
      beforeEach(() => {
        button.simulate(`click`);
      });

      it('should call clickHandler', () => {
        expect(clickHandler).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('with «isPlaying» equal true', () => {
    beforeEach(() => {
      clickHandler = jest.fn();

      player = shallow(
        <AudioPlayer
          isPlaying={true}
          src={snapshotDummyURL}
          onTogglePlaying={clickHandler}
        />
      );

      button = player.find('.track__button');
    });

    // strange, but true :-/
    it('should have «track__button--pause» class', () => {
      expect(button.hasClass('track__button--pause')).toBeTruthy();
    });
  });
});

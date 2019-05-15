import React from 'react';
import {AudioPlayer, snapshotDummyURL} from './audio-player';
import {create} from 'react-test-renderer';


describe(`<AudioPlayer />`, () => {
  it(`should render correctly`, () => {
    const tree = create(
        <AudioPlayer
          src={snapshotDummyURL}
          isPlaying={false}
          onTogglePlaying={jest.fn()}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

import React, {Component, createRef} from 'react';
import {string, bool, func} from 'prop-types';

export const snapshotDummyURL = `void://for-snapshot`;

export class AudioPlayer extends Component {
  constructor(props) {
    super(props);

    this._audioRef = createRef();

    this._onPlayButtonClick = this._onPlayButtonClick.bind(this);
  }

  componentDidMount() {
    if (this.props.src !== snapshotDummyURL) {
      this._setAudio();
    }
  }

  render() {
    const {isLoading, isPlaying} = this.props;
    const buttonModifier = `track__button--${isPlaying ? `pause` : `play`}`;

    return (
      <div className="game__track">
        <button
          className={`track__button ${buttonModifier}`}
          type="button"
          disabled={isLoading}
          onClick={this._onPlayButtonClick}
        />
        <div className="track__status">
          <audio ref={this._audioRef} />
        </div>
      </div>
    );
  }

  _setAudio() {
    const {src, addAudioListeners} = this.props;
    addAudioListeners(new Audio(src));
  }

  _onPlayButtonClick() {
    const {isPlaying, onTogglePlaying} = this.props;
    onTogglePlaying(!isPlaying);
  }
}

AudioPlayer.propTypes = {
  isPlaying: bool.isRequired,
  isLoading: bool.isRequired,
  src: string.isRequired,

  onTogglePlaying: func.isRequired,
  addAudioListeners: func.isRequired,
};

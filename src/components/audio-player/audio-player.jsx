import React, {Component, createRef} from 'react';
import {string, bool, func} from 'prop-types';

export const snapshotDummyURL = `void://for-snapshot`;

export class AudioPlayer extends Component {
  constructor(props) {
    super(props);

    this._audioRef = createRef();

    this.state = {
      progress: 0,
      isLoading: false,
    };

    this._onPlayButtonClick = this._onPlayButtonClick.bind(this);
  }

  componentDidMount() {
    if (this.props.src !== snapshotDummyURL) {
      this._setAudio();
    }
  }

  componentWillUnmount() {
    const audio = this._audio;

    Object.assign(audio, {
      oncanplaythrough: null,
      onplay: null,
      onpause: null,
      ontimeupdate: null,
      src: null,
    });

    this._audio = null;
  }

  componentDidUpdate() {
    const {state: {isLoading}, props: {isPlaying}} = this;
    const audio = this._audio;

    if (!isLoading) {
      if (isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }

  render() {
    const {state: {isLoading}, props: {isPlaying}} = this;
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
    const {props: {src, isPlaying}} = this;

    this._audio = new Audio(src);

    const audio = this._audio;

    const setState = this.setState.bind(this);

    setState({
      progress: audio.currentTime,
      isLoading: true
    });

    Object.assign(audio, {
      oncanplaythrough() {
        setState({isLoading: false, isPlaying});
      },
      onplay() {
        setState({isPlaying: true});
      },
      onpause() {
        setState({isPlaying: false});
      },
      ontimeupdate() {
        setState({progress: audio.currentTime});
      },
      onended() {
        setState({progress: 0, isPlaying: false});
      }
    });
  }

  _onPlayButtonClick() {
    const {isPlaying} = this.props;
    this.props.onTogglePlaying(!isPlaying);
  }
}

AudioPlayer.propTypes = {
  isPlaying: bool.isRequired,
  onTogglePlaying: func.isRequired,
  src: string.isRequired,
};

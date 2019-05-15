import React, {Fragment, Component} from 'react';
import {string} from 'prop-types';

export const snapshotDummyURL = `void://for-snapshot`;

export class AudioPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0,
      isLoading: false,
      isPlaying: false
    };

    this._onPlayButtonClick = this._onPlayButtonClick.bind(this);
  }

  componentDidMount() {
    if (this.props.src !== snapshotDummyURL) {
      this._setAudio();
    }
  }

  componentDidUpdate() {
    const {state: {isLoading, isPlaying}} = this;
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
    const {state: {isLoading, isPlaying}} = this;

    return (
      <Fragment>
        <button
          className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
          type="button"
          disabled={isLoading}
          onClick={this._onPlayButtonClick}
        />
        <div className="track__status">
          <audio />
        </div>
      </Fragment>
    );
  }

  _setAudio() {
    const {props: {src}} = this;

    this._audio = new Audio(src);

    const audio = this._audio;

    this.setState({
      progress: audio.currentTime,
      isLoading: true
    });

    Object.assign(audio, {
      onplay() {
        this.setState({isPlaying: true});
      },
      onpause() {
        this.setState({isPlaying: false});
      },
      ontimeupdate() {
        this.setState({progress: audio.currentTime});
      }
    });
  }

  _onPlayButtonClick() {
    this.setState({
      isPlaying: !this.state.isPlaying
    });
  }
}

AudioPlayer.propTypes = {
  src: string.isRequired
};

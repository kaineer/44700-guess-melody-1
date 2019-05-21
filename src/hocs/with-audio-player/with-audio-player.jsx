// src/hocs/with-audio-player/with-audio-player.jsx

import React, {PureComponent} from 'react';

export const withAudioPlayer = (PlayerComponent) => {
  return class extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        progress: 0,
        isLoading: false
      };

      this._addAudioListeners = this._addAudioListeners.bind(this);
      this._removeAudioListeners = this._removeAudioListeners.bind(this);
    }

    render () {
      const {src, onTogglePlaying, isPlaying} = this.props;

      return (
        <PlayerComponent
          {...{src, onTogglePlaying, isPlaying}}
          addAudioListeners={this._addAudioListeners}
        />
      );
    }

    componentDidUpdate() {
      const {isLoading} = this.state;
      const {isPlaying} = this.props;
      const audio = this._audio;

      if (audio && !isLoading) {
        if (isPlaying) {
          audio.play();
        } else {
          audio.pause();
        }
      }
    }

    componentWillUnmount() {
      this._removeAudioListeners();
    }

    _addAudioListeners(audio) {
      this._audio = audio;

      const setState = this.setState.bind(this);

      setState({
        progress: audio.currentTime,
        isLoading: true
      });

      Object.assign(audio, {
        oncanplaythrough() {
          setState({isLoading: false});
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

    _removeAudioListeners() {
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
  }
};
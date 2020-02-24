import React, { Component } from 'react';

export default class Timer extends Component {
  render() {
    let minuteParse = Math.trunc(this.props.timer / 60);
    let minutes = minuteParse < 10 ? `0${minuteParse}` : minuteParse;
    let secondParse = this.props.timer % 60;
    let seconds = secondParse < 10 ? `0${secondParse}` : secondParse;

    return (
      <div className="pomodoro-timer">
        {minutes}:{seconds}
      </div>
    )
  }
}

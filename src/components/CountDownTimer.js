
import React from "react";
import { Button } from './Buttons';
import TimerText from './Text';
export default class CountDownTimer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      initMin: 1,
      initSec: 0,
      currentMin: 1,
      currentSec: 0,
      isPlaying: false,
      isStop: false,
      playButtonText: 'Start',
    };
  }

  componentDidMount() {
    console.log(`MTFK componentDidMount`)
    // this.startTimer();
  }

  componentWillUnmount() {
    console.log(`MTFK componentWillUnmount`)
    clearInterval(this.interval);
  }

  startTimer = () => {
    console.log(`MTFK startTimer`)
    this.interval = setInterval(() => {
      this.updateTimer();
    }, 1000);
  }

  stopTimer = (initMin, initSec) => {
    console.log(`stopTimer`)
    this.setState(state => ({ ...state, isPlaying: false, currentMin: initMin, currentSec: initSec }));
    clearInterval(this.interval);
  }

  pauseTimer = () => {
    console.log(`pauseTimer`)
    this.setState(state => ({ ...state, isPlaying: false }));
    clearInterval(this.interval);
  }

  updateTimer = () => {
    const {
      currentMin,
      currentSec,
      initMin,
      initSec,
      isPlaying,
      isStop
    } = this.state;

    if (isPlaying) {
      // Handle timer
      if (currentMin > 0) {
        this.setState(state => ({ ...state, currentMin: currentMin - 1, currentSec: 59 }));
      } else {
        this.setState(state => ({ ...state, currentSec: currentSec - 1 }));
      }
      return;
    }

    if (isStop === true) {
      this.stopTimer(initMin, initSec);
    } else {
      this.pauseTimer();
    }
  }

  handlePlayButton = () => {
    const { isPlaying } = this.state;

    if (isPlaying) {
      this.setState(state => ({
        ...state,
        isPlaying: false,
        playButtonText: 'Start'
      }));
    } else {
      this.setState(state => ({
        ...state,
        isPlaying: true,
        playButtonText: 'Pause'
      }), () => this.startTimer());
    }
  }

  resetTimer = () => {
    const { initMin, initSec } = this.state;
    console.log(`MTFK resetTimer`)
    this.setState(state => ({
      ...state,
      isPlaying: false,
      isStop: true,
      playButtonText: 'Start',
      currentMin: initMin,
      currentSec: initSec
    }));
  }

  render() {
    const {
      isPlaying,
      isStop,
      currentMin,
      currentSec,
      initMin,
      initSec,
      playButtonText
    } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <TimerText>
            {currentMin}:{currentSec}
          </TimerText>
          <Button onClick={() => this.handlePlayButton()}>
            {playButtonText}
          </Button>
          <Button onClick={() => this.resetTimer()}>
            Stop
          </Button>
        </header>
        {/* 
        <body>

        </body> */}
      </div >
    );
  }
}

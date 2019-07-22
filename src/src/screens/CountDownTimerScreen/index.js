import React from "react";
import { Button } from '../../components/Buttons';
import TimerText from '../../components/Text';
import { ProgressBar } from 'react-bootstrap';
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
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  startTimer = () => {
    this.interval = setInterval(() => {
      this.updateTimer();
    }, 1000);
  }

  stopTimer = (initMin, initSec) => {
    this.setState(state => ({ ...state, isPlaying: false, currentMin: initMin, currentSec: initSec }));
    clearInterval(this.interval);
  }

  pauseTimer = () => {
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
      currentMin,
      currentSec,
      playButtonText
    } = this.state;

    return (
      <div className="App">
        <header className="App-header">

          <ProgressBar now={60} />
          {/* <Button variant="primary">Primary</Button> */}
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

import React from "react";
import { Button } from '../../components/Buttons';
import TimerText from '../../components/Text';
import { Line, Circle } from 'rc-progress';


const CIRCLE_COLOR = '#3FC7FA';
export default class CountDownTimer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      initMin: 25,
      initSec: 0,
      currentMin: 25,
      currentSec: 0,
      isPlaying: false,
      isStop: false,
      playButtonText: 'Start',
      progress: 0,
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
      if (currentSec === 0) {
        if (currentMin > 0) {
          this.setState(state => ({ ...state, currentMin: currentMin - 1, currentSec: 59 }), () => this.handlePercent());
        } else {
          this.resetTimer();
        }
      } else {
        this.setState(state => ({ ...state, currentSec: currentSec - 1 }), () => this.handlePercent());
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

  handlePercent = () => {
    const { currentSec, currentMin, initSec, initMin } = this.state;
    const couputedPercent = 100 * (1 - ((currentSec + currentMin * 60) / (initSec + initMin * 60)).toFixed(2));
    console.log('couputedPercent', couputedPercent);
    this.setState({ percent: couputedPercent });
  }

  render() {
    const {
      currentMin,
      currentSec,
      playButtonText,
      percent
    } = this.state;

    const circleContainerStyle = {
      width: '250px',
      height: '250px',
      display: 'inline-block',
    };

    return (
      <div className="App">
        <header className="App-header">
          <div style={circleContainerStyle}>
            <Circle percent={percent} strokeWidth="6" strokeLinecap="round" strokeColor={CIRCLE_COLOR} />
          </div>
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

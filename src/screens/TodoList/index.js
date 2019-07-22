import React from "react";
import { Button } from '../../components/Buttons';
import TimerText from '../../components/Text';
import { ProgressBar } from 'react-bootstrap';
import { Line, Circle } from 'rc-progress';


const CIRCLE_COLOR = '#3FC7FA';
export default class CountDownTimer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      doneList: [],
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
    // clearInterval(this.interval);
  }

  render() {
    const {
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
        </header>
      </div >
    );
  }
}

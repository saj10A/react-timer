import React from 'react';
import ReactDOM from 'react-dom/client';

import "./style.css";
import { TestContext } from './TestContext';

let interval;

class Timer extends React.Component {

  constructor() {
    super();
    this.state = {
      minute: 0,
      second: 0,
      isStart: false
    }
  }

  static contextType = TestContext;

  handleStartTimer = () => {

    if (this.state.isStart == false) {

      this.setState({
        isStart: true
      })

      interval = setInterval(() => {
        this.setState({
          second: this.state.second + 1
        })

        if (this.state.second == 59) {
          this.setState({
            second: 0,
            minute: this.state.minute + 1
          })
        }
      }, 1000);
    }

  }

  handleStopTimer = () => {
    this.setState({
      isStart: false
    })

    clearInterval(interval);
  }

  handleResetTimer = () => {
    this.handleStopTimer();

    this.setState({
      second: 0,
      minute: 0
    })
  }

  handleSaveTime = () => {
    let newTime = document.querySelector(".timer").innerHTML;
    this.context.setTimeArr([...this.context.timeArr, newTime]);
  }


  render() {
    let s = this.state.second;
    let m = this.state.minute;

    return (
      <>
        <h2 style={{color: this.context}} className='timer' onClick={this.handleSaveTime}>
          {`${m > 9 ? m : `0${m}`} : ${s > 9 ? s : `0${s}`}`}
        </h2>
        <div>
          <button className='btn' onClick={this.handleStartTimer}>Start</button>
          <button className='btn' onClick={this.handleStopTimer}>Stop</button>
          <button className='btn' onClick={this.handleResetTimer}>Reset</button>
          <button className='btn' onClick={this.props.handleSetIsLight}>night/light</button>
        </div>
      </>
    )
  }
}

export default Timer;
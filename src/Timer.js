import React from 'react';

import './style.css'

let interval;
class Timer extends React.Component{
  constructor(){
    super();
    this.state = {
      minute: 1,
      second: 59,
      isRunning: false
    }
  }
  componentDidUpdate() {
    if(this.state.second === 0 && this.state.minute === 0) {
        clearInterval(interval);
    }
  }
  render(){
    return(
      <>
       <h2 className="timer">
        it is {this.leadingZero(this.state.minute)}:{this.leadingZero(this.state.second)}
       </h2>
       <div>
        <button onClick={this.startTimer} className="btn btn-success">Start</button>
        <button onClick={this.stopTimer} className="btn btn-danger">Stop</button>
       </div>
      </>
    )
  }

  leadingZero(number) {
    if(number < 10) {
        return `0${number}`;
    }
    return number;
  }
  startTimer = () => {
    if(!this.state.isRunning) {
      this.setState({
        isRunning: true
      })
      interval = setInterval(()=>{
      this.setState({
          second: this.state.second - 1
      })
      if(this.state.second === 0 && this.state.minute !== 0) {
          this.setState({
              second: 59, 
              minute: this.state.minute - 1
          })
      }
    } , 1000)
    }
  }
  stopTimer = () => {
    clearInterval(interval);
    this.setState({
      isRunning: false
    })
  }
}

export default Timer;
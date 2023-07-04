import React from 'react';

import './style.css'

let interval;
class Timer extends React.Component{
  constructor(){
    super();
    this.state = {
      hour: 0,
      minute: 1,
      second: 59
    }
  }
  componentDidMount(){
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
        else if(this.state.minute === 0 && this.state.hour !== 0) {
            this.setState({
                minute: 59,
                hour: this.state.hour - 1
            })
        }
      } , 1000)
  }
  componentDidUpdate() {
    if(this.state.second === 0 && this.state.minute === 0 && this.state.hour === 0) {
        clearInterval(interval);
    }
  }
  render(){
    return(
      <h2 className="timer">
        it is {this.leadingZero(this.state.hour)}:{this.leadingZero(this.state.minute)}:{this.leadingZero(this.state.second)}
      </h2>
    )
  }

  leadingZero(number) {
    if(number < 10) {
        return `0${number}`;
    }
    return number;
  }
}

export default Timer;
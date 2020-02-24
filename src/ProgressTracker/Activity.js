import React, { Component } from 'react';
import Pomodoro from './Pomodoro';


export default class Activity extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentId: this.props.id
    }
  
    this.counter = this.counter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Function that receives a call from child Pomodoro and passes current id back to parent
  counter() {
    this.props.incrementCount(this.state.currentId);
  }

  // Function that handles when delete X button is clicked on each Activity
  handleSubmit() {
    this.props.removeActivity(this.state.currentId);
  }

  render() {
    
    let timerLength = parseInt(this.props.timerMin * 60) + parseInt(this.props.timerSec);
    let breakLength = parseInt(this.props.breakMin * 60) + parseInt(this.props.breakSec);
    let desc = this.props.desc ? this.props.desc : "Timed Activity";

    return (
      <div className="card card--activity wrapper">
        <Pomodoro
          counter={this.counter} 
          count={this.props.count} 
          timerLength={timerLength} 
          breakLength={breakLength}
        />

        <section className="card-header">
          <h2 className="card-title">{this.props.title}</h2>
          <p className="card-desc">{desc}</p>
          
          <div className="card-controls wrapper--row">
            <button onClick={this.handleSubmit} className="card-controls__button">X</button>
          </div>
        </section>
      </div>
    )
  }
}

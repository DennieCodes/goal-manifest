import React, { Component } from 'react';

export default class ActivityForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      desc: "",
      count: 0,
      timerMin: 0,
      timerSec: 0,
      breakMin: 0,
      breakSec: 0
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  
  // Function that handles when the activity form is submitted passing state back to parent function
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addActivity(this.state);
    this.setState({ // Reset user input variables
      title: "",
      desc: "",
      timerMin: 0,
      timerSec: 0,
      breakMin: 0,
      breakSec: 0
    })
  }

  // Function that handles changes to the input forms
  handleChange(evt) {
    this.setState({[evt.target.name] : evt.target.value});
  }

  // Function that handles when the submit button has focus in order for form validation
  handleFocus() {
    console.log('focused');
  }

  handleBlur() {
    console.log('blurred');
  }

  render() {
    return (
      <div className="card card--activity wrapper">
        <header className="card-header">
          <h3 className="card-title">Add an Activity</h3>
          <p className="card-desc">
            Enter the Activity that you'd like to track, a brief description, the length of time 
            for each cycle and the break time.
          </p>
        </header>
        
        <form className="card-form wrapper" onSubmit={this.handleSubmit}>
          <label className="card-form__label" htmlFor="title">Title</label>
          <input className="card-form__input" type="text" id="title" name="title" required
            value={this.state.title} 
            onChange={this.handleChange}/>

          <label className="card-form__label" htmlFor="desc">Description</label>
          <textarea className="card-form__input" id="desc" name="desc" rows="4"
            value={this.state.desc}
            onChange={this.handleChange}>
          </textarea>

          <div className="card-form__row wrapper--row ">
            <label className="card-form__label" htmlFor="timerMin">Minutes/Seconds for Timer</label>
              <input className="card-form__input--short" type="number" id="timerMin" name="timerMin"
                placeholder="25"
                value={this.state.timerMin}
                onChange={this.handleChange}/>
              
              <input className="card-form__input--short" type="number" id="timerSec" name="timerSec" max="60"
                placeholder="00" 
                value={this.state.timerSec}
                onChange={this.handleChange}/>          
          </div>

          <div className="card-form__row wrapper--row">
            <label className="card-form__label" htmlFor="breakMin">Minutes/Seconds for Break</label>
              <input className="card-form__input--short" type="number" id="breakMin" name="breakMin"
                placeholder="5"
                value={this.state.breakMin}
                onChange={this.handleChange}/>

              <input className="card-form__input--short" type="number" id="breakSec" name="breakSec"
                placeholder="00" max="60" 
                value={this.state.breakSec}
                onChange={this.handleChange}/>

          </div>

          <button className="card-form__button"
            onFocus={this.handleFocus}
            onMouseOver={this.handleFocus}
            onBlur={this.handleBlur}
            onMouseLeave={this.handleBlur}>
              Submit
          </button>
        </form>
      </div>
    )
  }
}

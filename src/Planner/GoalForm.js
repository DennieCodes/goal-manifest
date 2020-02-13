import React, { Component } from 'react';
import './GoalForm.css';

export default class GoalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      desc: "",
      target: ""
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Function that handles changes to the form inputs
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value});
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addGoal(this.state);
    // Make sure to reset state after adding
  }

  render() {
    return (
      <div className="goal-card">
        <h3 className="goal-card__title">Add a Goal</h3>
        <p className="goal-card__desc">Add a goal, a description and your target date to complete this goal</p>
        
        <form className="goal-form" onSubmit={this.handleSubmit}>
          <label className="activity-form__label" htmlFor="title">Title</label>  
          <input className="activity-form__input" type="text" id="title" name="title" 
            onChange={this.handleChange}>
          </input>

          <label className="activity-form__label" htmlFor="desc">Description</label>  
          <textarea className="activity-form__input" type="text" id="desc" name="desc" rows="3"
            onChange={this.handleChange}>
          </textarea>

          <div className="activity-form__row-grouping">
            <label className="activity-form__label" htmlFor="title">Target Date</label>  
            <input className="activity-form__input" type="date" id="target" name="target"
              onChange={this.handleChange}>
            </input>      

            <button className="activity-form__button goal-form__button">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

import React, { Component } from 'react';

export default class GoalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      desc: "",
      target: "",
      start: ""
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Function that handles changes to the form inputs
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value});
  }

  // Function that passes submitted form data through addGoal function passed by props
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addGoal(this.state);
    this.setState({
      title: "",
      desc: "",
      target: ""
    })
  }

  render() {
    return (
      <div className="card wrapper card--goal">
        <header className="card-header">
          <h3 className="card-title">Add a Goal</h3>
          <p className="card-desc">Add a goal, a description and your target date to complete this goal</p>
        </header>
        
        <form className="card-form wrapper" onSubmit={this.handleSubmit}>
          <label className="card-form__label" htmlFor="title">Title</label>  
          <input className="card-form__input" type="text" id="title" name="title" 
            value={this.state.title}
            onChange={this.handleChange}>
          </input>

          <label className="card-form__label" htmlFor="desc">Description</label>  
          <textarea className="card-form__input" type="text" id="desc" name="desc" rows="3"
            value={this.state.desc}
            onChange={this.handleChange}>
          </textarea>

          <div className="card-form__row--controls">
            <label className="card-form__label" htmlFor="title">Target Date</label>  
            <input className="card-form__input" type="date" id="target" name="target"
              value={this.state.target}
              onChange={this.handleChange}>
            </input>      

            <button className="card-form__button card-form__button--short">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

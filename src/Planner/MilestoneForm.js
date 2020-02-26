import React, { Component } from 'react';

export default class MilestoneForm extends Component {
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
  
  // function that handles when the milestone form is submitted
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addMilestone(this.state);
    this.setState({
      title: "",
      desc: "",
      target: ""
    })
  }

  // function that handles whenever the input fields of the form is modified.
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value});
  }

  render() {
    return (
      <form className="card-form--milestone wrapper" onSubmit={this.handleSubmit}>
        <label className="card-form__label" htmlFor="milestoneTitle">Title</label>  
        <input className="card-form__input" type="text" id="milestoneTitle" name="title" 
          value={this.state.title}
          onChange={this.handleChange}>
        </input>

        <label className="card-form__label" htmlFor="milestoneDesc">Description</label>
        <textarea className="card-form__input" type="text" id="milestoneDesc" name="desc" rows="3"
          value={this.state.desc}
          onChange={this.handleChange}>
        </textarea>

        <section className="card-form__row--controls">
          <label className="card-form__label" htmlFor="milestoneTarget">Target Date</label>
          <input className="card-form__input--date" type="date" id="milestoneTarget" name="target"
            value={this.state.target}
            onChange={this.handleChange}>
          </input>

          <button className="card-form__button card-form__button--short">Add Milestone</button>
        </section>
      </form>
    )
  }
}

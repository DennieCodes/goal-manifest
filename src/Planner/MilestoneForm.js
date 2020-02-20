import React, { Component } from 'react';
import './MilestoneForm.css';

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
      <form className="milestone-form" onSubmit={this.handleSubmit}>
        <label className="milestone-form__label" htmlFor="milestoneTitle">Title</label>  
        <input className="milestone-form__input" type="text" id="milestoneTitle" name="title" 
          value={this.state.title}
          onChange={this.handleChange}>
        </input>

        <label className="milestone-form__label" htmlFor="milestoneDesc">Description</label>
        <textarea className="milestone-form__input" type="text" id="milestoneDesc" name="desc" rows="3"
          value={this.state.desc}
          onChange={this.handleChange}>
        </textarea>

        <section className="milestone-subform">
          <label className="milestone-form__label" htmlFor="milestoneTarget">Target Date</label>
          <input className="milestone-form__input--date" type="date" id="milestoneTarget" name="target"
            value={this.state.target}
            onChange={this.handleChange}>
          </input>

          <button className="milestone__button">Add Milestone</button>
        </section>
      </form>
    )
  }
}

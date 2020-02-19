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
  }
  
  // function
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value});
  }

  render() {
    return (
      <form className="milestone-form">
        <label className="milestone-form__label" htmlFor="title">Title</label>  
        <input className="milestone-form__input" type="text" id="title" name="title" 
          value={this.state.title}
          onChange={this.handleChange}>
        </input>

        <label className="milestone-form__label" htmlFor="desc">Description</label>
        <textarea className="milestone-form__input" type="text" id="desc" name="desc" rows="3"
          value={this.state.desc}
          onChange={this.handleChange}>
        </textarea>

        <section className="milestone-subform">
          <label className="milestone-form__label" htmlFor="title">Target Date</label>
          <input className="milestone-form__input--date" type="date" id="target" name="target"
            value={this.state.target}
            onChange={this.handleChange}>
          </input>

          <button className="milestone__button">Add Milestone</button>
        </section>
      </form>
    )
  }
}

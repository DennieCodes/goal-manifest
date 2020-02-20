import React, { Component } from 'react'

export default class Milestone extends Component {
  constructor(props) {
    super(props);
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Function that handles when the delete button is clicked
  handleSubmit(evt) {
    this.props.removeMilestone(this.props.id);
  }
  
  render() {
    return (
      <tr className="milestone__row">
        <td className="milestone-title">{this.props.title}</td>
        <td className="milestone-desc">{this.props.desc}</td>
        <td className="milestone-date">{this.props.target}</td>
        <td className="milestone-tool">
        <button onClick={this.handleSubmit} className="milestone-delete">X</button>
        </td>
      </tr>
    )
  }
}

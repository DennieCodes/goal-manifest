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
      <tr className="card-table__row">
        <td className="card-table__title">{this.props.title}</td>
        <td className="card-table__desc">{this.props.desc}</td>
        <td className="card-table__date">{this.props.target}</td>
        <td className="card-table__tool">
        <button onClick={this.handleSubmit} className="icon-delete">X</button>
        </td>
      </tr>
    )
  }
}

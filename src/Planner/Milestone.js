import React, { Component } from 'react'

export default class Milestone extends Component {
  render() {
    return (
      <tr className="milestone__row">
        <td className="milestone-title">{this.props.title}</td> 
        <td className="milestone-desc">{this.props.desc}</td> 
        <td className="milestone-date">{this.props.target}</td> 
        <td className="milestone-date">{this.props.actual}</td>
      </tr>
    )
  }
}

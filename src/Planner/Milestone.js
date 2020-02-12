import React, { Component } from 'react'

export default class Milestone extends Component {
  render() {
    return (
      <li className="milestone__li">
        {this.props.title} {this.props.desc} {this.props.target} {this.props.actual}
      </li>
    )
  }
}

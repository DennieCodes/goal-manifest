import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component {
  render() {
    return (
      <nav className="wrapper--row nav-main">
        <li className="nav-main__li">
          <NavLink activeClassName="nav-main__link--active" className="nav-main__link" exact to="/">
            Home</NavLink>
        </li>

        <li className="nav-main__li">
          <NavLink activeClassName="nav-main__link--active" className="nav-main__link" exact to="/tracker">
            Progress Tracker</NavLink>
        </li>

        <li className="nav-main__li">
          <NavLink activeClassName="nav-main__link--active" className="nav-main__link" exact to="/planner">
            Goal Planner</NavLink>
        </li>
      </nav>
    )
  }
}

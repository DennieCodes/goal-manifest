import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

export default class Navigation extends Component {
  render() {
    return (
      <nav className="navigation-main">
        <li className="navigation-main__li">
          <NavLink activeClassName="navigation-main__link--active" className="navigation-main__link" exact to="/">
            Home</NavLink>
        </li>

        <li className="navigation-main__li">
          <NavLink activeClassName="navigation-main__link--active" className="navigation-main__link" exact to="/tracker">
            Progress Tracker</NavLink>
        </li>

        <li className="navigation-main__li">
          <NavLink activeClassName="navigation-main__link--active" className="navigation-main__link" exact to="/planner">
            Goal Planner</NavLink>
        </li>
      </nav>
    )
  }
}

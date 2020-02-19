import React, { Component } from 'react';
import Milestone from './Milestone';
import MilestoneForm from './MilestoneForm';
import './Goal.css';

export default class Goal extends Component {
  render() {
    let milestones = this.props.milestones.map(item => {
      return (
        <Milestone 
          title={item.title}
          desc={item.desc}
          target={item.target}
          actual={item.actual}
        />
      )
    });
    
    return (
      <div className="goal-card">
        <header className="goal-card-header">
          <h2 className="goal-card__title">{this.props.title}</h2>
          <p className="goal-card__desc">{this.props.desc}</p>
          <p className="goal-card__dates">
            <span className="goal-card__label">Start Date:</span> {this.props.start} 
            <span className="goal-card__label">Target Date:</span> {this.props.target}
          </p>
        </header>

        <section className="goal-subcard">
          <h2 className="goal-subcard__title">Milestones</h2>
          
          <table className="milestone__table">
            <thead>
              <tr className="milestone-header">
                <th className="milestone-title">Title</th>
                <th className="milestone-desc">Description</th>
                <th className="milestone-date">Target Date</th>
                <th className="milestone-date">Finish Date</th>
              </tr>
            </thead>
          
            <tbody>
              {milestones}
            </tbody>
          </table>

          <h2 className="milestone-form-title">Add a Milestone to your goal</h2>
          <MilestoneForm />
        </section>
      </div>
    )
  }
}
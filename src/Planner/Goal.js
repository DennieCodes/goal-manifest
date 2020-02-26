import React, { Component } from 'react';
import Milestone from './Milestone';
import MilestoneForm from './MilestoneForm';
import uuid from 'uuid/v4';

export default class Goal extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      title: this.props.title,
      desc: this.props.desc ,
      start: this.props.start,
      target: this.props.target,
      key: this.props.id,
      id: this.props.id,
      milestones: this.props.milestones || []
    }
    
    this.addMilestone = this.addMilestone.bind(this);
    this.removeMilestone = this.removeMilestone.bind(this);
  }

  // Function that processes MilestoneForm submission, adds milestone entry and passes it up to Planner parent component
  async addMilestone(newMilestone) {
    let newItem = {...newMilestone, id: uuid()};
    await this.setState(state => ({ milestones: [...state.milestones, newItem] }));

    this.props.updateGoal(this.state);
  }

  // Function that is passed to Milestone components which handles when 
  async removeMilestone(itemId) {
    let arr = this.state.milestones;
    let idx = 0;

    while(arr[idx].id !== itemId) { idx++;}

    arr.splice(idx, 1);
    await this.setState({
      milestones: arr
    });

    this.props.updateGoal(this.state);
  }

  render() {
    let milestones = this.props.milestones.map(item => {
      return (
        <Milestone
          removeMilestone={this.removeMilestone} 
          title={item.title}
          desc={item.desc}
          target={item.target}
          actual={item.actual}
          id={item.id}
          key={item.id}
        />
      )
    });

    let milestoneList = milestones.length > 0 ? (
      <section className="card-milestone">
      <h3 className="card-subtitle">Milestones</h3>
      <table className="card-table">
        <thead>
          <tr className="card-table__header">
            <th className="card-table__title">Title</th>
            <th className="card-table__desc">Description</th>
            <th className="card-table__date">Target Date</th>
            <th className="card-table__tool">Del</th>
          </tr>
        </thead>
      
        <tbody>
          {milestones}
        </tbody>
        </table>
      </section>
    ) : "";

    return (
      <div className="card wrapper card--goal">
        <header className="card-header">
          <h2 className="card-title">{this.props.title}</h2>
          <p className="card-desc">{this.props.desc}</p>
          <p className="card-dates">
            <span className="card-dates__label">Start Date:</span> {this.props.start} 
            <span className="card-dates__label">Target Date:</span> {this.props.target}
          </p>
        </header>

        <section className="card-subcard">
          {milestoneList}          

          <h2 className="card-subcard-title">Add a Milestone to your goal</h2>
          <MilestoneForm addMilestone={this.addMilestone}/>
        </section>
      </div>
    )
  }
}
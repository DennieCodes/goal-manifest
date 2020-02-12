import React, { Component } from 'react';
import Goal from './Goal';
import GoalForm from './GoalForm';
import './Planner.css';

export default class Planner extends Component {
  constructor(props) {
    super(props);
    this.state = { goals: [] }
  
  }
  
  render() {
    let description = "My goal is to be ready to apply for jobs by April 1st so I'd like to have my portfolio and two full stack projects in live production";
    let milestones = [{title: "1st milestone", desc: "first milestone", target: "02/17/20", actual: "02/10/20"}];

    return (
      <div className="planner">        
        <Goal 
          title={"Be job ready by April 1st"}
          desc={description }
          start={"02/10/20"}
          target={"04/01/20"}
          id={'ABCD'}
          milestones={milestones}
        />
        
        <GoalForm />
      </div>
    )
  }
}

// 1. Title and Description
// 2. Index of goals
// 3. Goal add form
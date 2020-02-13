import React, { Component } from 'react';
import Goal from './Goal';
import GoalForm from './GoalForm';
import uuid from 'uuid/v4';
import './Planner.css';

export default class Planner extends Component {
  constructor(props) {
    super(props);
    this.state = { goal: [] }
  
    this.addGoal = this.addGoal.bind(this);
  }
  
  // Function that adds the goal from GoalForm onto the state array: goal
  addGoal(goal) {
    let newGoal = {...goal, id: uuid()};

    this.setState(state => ({
      goal: [...state.goal, newGoal]
    }));
  }

  render() {

    // Temporary values for testing
    let tempMilestones = [{          
      title: 'Milestone',
      desc: 'Do something by',
      target: '08/01/2020',
      actual: '02/10/2020'
    }];

    let goals = this.state.goal.map(goal => {
      return (
        <Goal 
          title={goal.title}
          desc={goal.desc }
          start={goal.start}
          target={goal.target}
          key={goal.id}
          id={goal.id}
          milestones={tempMilestones}
        />
      );
    });

    return (
      <div className="planner">        
        {goals}
        <GoalForm addGoal={this.addGoal}/>
      </div>
    )
  }
}

// 1. Title and Description
// 2. Index of goals
// 3. Goal add form
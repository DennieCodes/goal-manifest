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
    this.updateLocalStorage = this.updateLocalStorage.bind(this);
  }
  
  // Function that adds the goal from GoalForm onto the state array: goal
  addGoal(goal) {
    let parsedTarget = `${goal.target.substr(8, 2)}/${goal.target.substr(5, 2)}/${goal.target.substr(0, 4)}`;
    goal.target = parsedTarget;

    let curDate = new Date();
    let parseDate = `${curDate.getMonth()+1}/${curDate.getDate()}/${curDate.getFullYear()}`;
    
    let newGoal = {...goal, id: uuid(), start: parseDate, milestones: [{}]};

    this.setState(state => ({
      goal: [...state.goal, newGoal]
    }));
  }

  componentDidMount() {
    this.setState({
      goal: JSON.parse(window.localStorage.getItem("goal")) || []
    });
  }

  // Function that executes whenever changes affect the React component
  componentDidUpdate() {
    console.log('Component Updated');
    this.updateLocalStorage();
  }

  // Function that stores locally any changes to activity
  updateLocalStorage() {
    window.localStorage.setItem("goal", JSON.stringify(this.state.goal));
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
        <section className="section--row">
          {goals}
          <GoalForm addGoal={this.addGoal}/>        
        </section>
      </div>
    )
  }
}
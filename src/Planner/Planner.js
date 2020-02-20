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
    this.updateGoal = this.updateGoal.bind(this);
    this.updateLocalStorage = this.updateLocalStorage.bind(this);
  }
  
  // Function that adds the goal from GoalForm onto the state array: goal
  addGoal(goal) {
    let parsedTarget = `${goal.target.substr(8, 2)}/${goal.target.substr(5, 2)}/${goal.target.substr(0, 4)}`;
    goal.target = parsedTarget;

    let curDate = new Date();
    let parseDate = `${curDate.getMonth()+1}/${curDate.getDate()}/${curDate.getFullYear()}`;
    
    let newGoal = {...goal, id: uuid(), start: parseDate, milestones: []};

    this.setState(state => ({
      goal: [...state.goal, newGoal]
    }));
  }

  // Function that stores any changes to an individual goal
  updateGoal(goal) {
    let updateArr = this.state.goal;
    let idx = 0;

    while(updateArr[idx].id !== goal.id) {
      idx++;
    }

    updateArr[idx] = goal;
    this.setState({ goal: updateArr});

    this.updateLocalStorage();
  }

  componentDidMount() {
    this.setState({
      goal: JSON.parse(window.localStorage.getItem("goal")) || []
    });
  }

  // Function that executes whenever changes affect the React component
  componentDidUpdate() {
    this.updateLocalStorage();
  }

  // Function that stores locally any changes to activity
  updateLocalStorage() {
    window.localStorage.setItem("goal", JSON.stringify(this.state.goal));
  }

  render() {

    let goals = this.state.goal.map(goal => {
      return (
        <Goal
          updateGoal={this.updateGoal} 
          title={goal.title}
          desc={goal.desc }
          start={goal.start}
          target={goal.target}
          key={goal.id}
          id={goal.id}
          milestones={goal.milestones}
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
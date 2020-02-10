import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Home from './Home';
import ProgressTracker from './ProgressTracker/ProgressTracker';
import Planner from './Planner/Planner';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="goal-manifest">
        <header>
          <Navigation />
        </header>
        
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/tracker" component={ProgressTracker} />
            <Route exact path="/planner" component={Planner} />  
          </Switch>
        </main>
        
        <footer>

        </footer>
      </div>
    );
  }
}

export default App;

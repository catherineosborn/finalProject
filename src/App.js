import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bar from './Components/Navbar';
import Home from './Components/Home';
import CreateNewReminders from './Components/CreateNewReminders';
import ViewReminders from './Components/ViewReminders';
import RecentlyCompleted from './Components/RecentlyCompleted';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import BrowserRouter and related components

export default function App() {
  return (
    <Router>
      <>
        <Bar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/CreateNewReminders" component={CreateNewReminders} />
          <Route path="/ViewReminders" component={ViewReminders} />
          <Route path="/RecentlyCompleted" component={RecentlyCompleted} />
        </Switch>
      </>
    </Router>
  );
}


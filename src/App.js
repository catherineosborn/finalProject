import React from 'react';
import './App.css';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import Bar from './Components/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/';
import CreateNewReminders from './Components/CreateNewReminders';
import ViewReminders from './Components/ViewReminders'
import RecentlyCompleted from './Components/RecentlyCompleted';
import './Index.css'


export default function App() {
  return (
    <>
    <Bar/>
    <div className='container'>
      <Router>
        <Switch>
        <Route path="/Home" element={<Home />} />
        <Route path="/CreateNewReminders" element={<CreateNewReminders />} />
        <Route path="/ViewReminders" element={<ViewReminders />} />
        <Route path="/RecentlyCompleted" element={<RecentlyCompleted/>} />
        </Switch>
      </Router>
    </div>
    </>
  );
}

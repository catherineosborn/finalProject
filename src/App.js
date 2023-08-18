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
  let component
  switch(window.location.pathname) {
    case "/":
      component = <App />
      break
    case "/CreateNewReminders":
      component = <CreateNewReminders />
      break
    case "/ViewReminders":
      component = <ViewReminders />
      break
    case "/RecentlyCompleted":
      component = <RecentlyCompleted />
      break
  }
  return (
    <>
    <Bar/>
    {component}
    </>
  );
}

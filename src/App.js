import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bar from './Components/Navbar';
import Home from './Components/Home';
import CreateNewReminders from './Components/CreateNewReminders';
import ViewReminders from './Components/ViewReminders';
import RecentlyCompleted from './Components/RecentlyCompleted';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {
  const [reminders, setReminders] = useState([]);
  const [completedReminders, setCompletedReminders] = useState([]);

  const handleDeleteReminder = (reminder) => {
    const updatedCompletedReminders = completedReminders.filter(r => r.id !== reminder.id);
    setCompletedReminders(updatedCompletedReminders);
  }

  useEffect(() => {
    const storedCompletedReminders = JSON.parse(localStorage.getItem('completedReminders'));
    if (storedCompletedReminders) {
      setCompletedReminders(storedCompletedReminders);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('completedReminders', JSON.stringify(completedReminders));
  }, [completedReminders]);

  return (
    <Router>
      <>
        <Bar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/CreateNewReminders" component={CreateNewReminders} />
          <Route path="/ViewReminders">
            <ViewReminders
              reminders={reminders}
              setReminders={setReminders}
              completedReminders={completedReminders}
              setCompletedReminders={setCompletedReminders}
            />
          </Route>
          <Route
            path="/RecentlyCompleted"
            render={(props) => (
              <RecentlyCompleted
                {...props}
                completedReminders={completedReminders}
                onDeleteReminder={handleDeleteReminder}
              />
            )}
          />
        </Switch>
      </>
    </Router>
  );
}
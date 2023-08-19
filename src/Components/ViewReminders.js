import React, { useEffect, useState } from "react";
import Reminder from "./Reminders";
import { Link } from "react-router-dom";

export default function ViewReminders() {
  const MOCK_API_URL = "https://64d6529b754d3e0f1361f3fa.mockapi.io/Reminder";

  const [reminders, setReminders] = useState([]);
  const [completedReminders, setCompletedReminders] = useState([]);

  const handleCompleteReminder = (completedReminder) => {
    setCompletedReminders(prevCompleted => [...prevCompleted, completedReminder]);
    setReminders(prevReminders => prevReminders.filter(r => r !== completedReminder));
  };

  useEffect(() => {
    fetch(MOCK_API_URL)
      .then(response => response.json())
      .then(data => setReminders(data))
      .catch(error => console.error("Error fetching reminders:", error));
  }, []);

  return (
    <div>
      {reminders.map((reminder, idx) => (
        <Reminder
          key={idx}
          reminder={reminder}
          onComplete={handleCompleteReminder}
        />
      ))}
      <Link className="recentlyCompletedLink" to="/RecentlyCompleted">View Recently Completed</Link>
    </div>
  );
}
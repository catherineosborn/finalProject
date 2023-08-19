import React, { useEffect, useState } from "react";
import Reminder from "./Reminders";
import { Link, useHistory } from "react-router-dom";

export default function ViewReminders({ completedReminders, setCompletedReminders }) {
  const MOCK_API_URL = "https://64d6529b754d3e0f1361f3fa.mockapi.io/Reminder";
  const MOCK_API_URL_2 = "https://64d6529b754d3e0f1361f3fa.mockapi.io/completedReminders";

  const [reminders, setReminders] = useState([]);
  const history = useHistory();

  const handleCompleteReminder = (completedReminder) => {
    setReminders(prevReminders => prevReminders.filter(r => r.id !== completedReminder.id));
    setCompletedReminders(prevCompleted => [...prevCompleted, completedReminder]);

    console.log("completedReminder.id:", completedReminder.id);
reminders.forEach(reminder => console.log("Reminder id:", reminder.id));


    fetch(MOCK_API_URL_2, {
      method: "POST",
      body: JSON.stringify(completedReminder),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(response => response.json())
    .then(data => {
      history.push("/RecentlyCompleted");
    })
    .catch(error => console.error("Error storing completed reminder: ", error));
  };

  const handleUpdateReminder = (updatedReminder) => {
    const updatedReminders = reminders.map(r => (r.id === updatedReminder.id ? updatedReminder : r));
    setReminders(updatedReminders);
  };

  useEffect(() => {
    fetch(MOCK_API_URL)
      .then(response => response.json())
      .then(data => setReminders(data))
      .catch(error => console.error("Error fetching reminders:", error));
  }, [setReminders]);

  return (
    <div>
      {reminders.map((reminder, idx) => (
        <Reminder
          key={idx}
          reminder={reminder}
          onComplete={handleCompleteReminder}
          onUpdateReminder={handleUpdateReminder}
        />
      ))}
      <Link className="recentlyCompletedLink" to="/RecentlyCompleted">View Recently Completed</Link>
    </div>
  );
}

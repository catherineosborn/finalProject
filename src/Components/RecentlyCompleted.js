import React from "react";
import Card from 'react-bootstrap/Card';

export default function RecentlyCompleted({ completedReminders }) {
  if (!completedReminders || completedReminders.length === 0) {
    return <p>No completed reminders to display.</p>;
  }

  return (
    <div>
      <h2>Recently Completed</h2>
      {completedReminders.map((reminder, idx) => (
        <Card key={idx} style={{ marginBottom: "1rem" }}>
          <Card.Body>
            <p>{reminder.reminderMessage}</p>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import { Form } from "react-bootstrap";
import UpdateReminders from "./UpdateReminders";

export default function Reminder({ reminder, onComplete, onUpdateReminder }) { 
  const calculateDaysAgo = (createdDate) => {
    const currentDate = new Date();
    const reminderDate = new Date(createdDate);
    const timeDifference = currentDate - reminderDate;
    const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return daysAgo;
  };

  const getColorBorderClass = (daysAgo) => {
    if (daysAgo <= 7) {
      return "green-border";
    } else if (daysAgo <= 14) {
      return "yellow-border";
    } else {
      return "red-border";
    }
  };

  const daysAgo = calculateDaysAgo(reminder.createdDate);
  const borderClass = getColorBorderClass(daysAgo);
  const [editMode, setEditMode] = useState(false);
  const [updatedReminder, setUpdatedReminder] = useState(reminder.reminderMessage);

  const handleComplete = () => {
    onComplete(reminder);
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleUpdateReminder = (updatedReminderText) => {
    const updatedReminder = { ...reminder, reminderMessage: updatedReminderText };
    onUpdateReminder(updatedReminder);
    setEditMode(false);
    setUpdatedReminder(updatedReminderText);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setUpdatedReminder(reminder.reminderMessage);
  };

  return (
    <Card className={`border ${borderClass}`} style={{ marginBottom: "1rem" }}>
      <Card.Body>
        {editMode ? (
          <UpdateReminders reminder={reminder} onUpdateReminder={handleUpdateReminder} />
        ) : (
          <Form.Control
            type="text"
            placeholder={reminder.reminderMessage}
            aria-label="Reminder input"
            readOnly
          />
        )}
      </Card.Body>
      <Card.Footer className="text-muted">
        {daysAgo} days ago
        <div>
          <Form.Check type="radio" label="Completed" onChange={handleComplete} />
          <button onClick={handleEdit}>Edit</button>
          {editMode && <button onClick={handleCancelEdit}>Cancel</button>}
        </div>
      </Card.Footer>
    </Card>
  );
}
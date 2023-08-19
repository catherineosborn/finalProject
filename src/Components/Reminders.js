import React from "react";
import Card from 'react-bootstrap/Card';
import { Form } from "react-bootstrap";

export default function Reminder({ reminder }) {

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

  const handleComplete = () => {
    onComplete(reminder);
  }

  return (
          <Card className={`border ${borderClass}`} style={{ marginBottom: "1rem" }}>
            <Card.Body>
              <Form.Control
                type="text"
                placeholder={reminder.reminderMessage}
                aria-label="Reminder input"
                readOnly
              />
            </Card.Body>
            <Card.Footer className="text-muted">
              {daysAgo} days ago
              <div>
                <Form.Check type="radio" label="Complete Reminder" onChange={handleComplete} />
              </div>
            </Card.Footer>
          </Card>
  );
}

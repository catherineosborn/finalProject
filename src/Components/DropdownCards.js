import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

export default function DropdownCards({ reminder, onComplete }) {
  const handleComplete = () => {
    onComplete(reminder);
  };

  return (
    <Card style={{ marginBottom: "1rem" }}>
      <Card.Body>
        <p>{reminder.reminderMessage}</p>
      </Card.Body>
      <Card.Footer>
        <Form.Check type="radio" onChange={handleComplete} />
      </Card.Footer>
    </Card>
  );
}
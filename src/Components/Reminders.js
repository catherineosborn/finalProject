import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Reminder({ reminder, updateReminder, deleteReminder }) {
  const MOCK_API_URL = "https://64d6529b754d3e0f1361f3fa.mockapi.io/Reminder";

  const [reminders, setReminders] = useState([]);

  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>Reminder</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
}
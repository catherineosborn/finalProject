import React, { useState } from "react";

export default function CreateNewReminders({ handleNewReminder }) {
  const MOCK_API_URL = "https://64d6529b754d3e0f1361f3fa.mockapi.io/Reminder";

  const [newReminderMessage, setNewReminderMessage] = useState('');
  const [newCreatedDate, setNewCreatedDate] = useState('');
  const [completedStatus, setCompletedStatus] = useState('');

  function postNewReminder(e) {
    e.preventDefault();

    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0];

    let data = {
      reminderMessage: newReminderMessage,
      createdDate: formattedDate,
      completedStatus: completedStatus,
    }

    fetch(MOCK_API_URL, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log("API Response:", data);
      handleNewReminder(data);
      setNewReminderMessage('');
      setNewCreatedDate('');
      setCompletedStatus('');
    })
    .catch(error => {
      console.error("Error: ", error);
    });
  }

  return (
    <div className="App">
      <div className="centeredContainer">
        <form className='newReminderBox'>
          <h3>New Reminder:</h3>
          <label>Reminder Message: </label><br/>
          <textarea rows={3} onChange={(e) => setNewReminderMessage(e.target.value)} /><br />
          <button className='submitButton' onClick={(e) => postNewReminder(e)}>Submit</button>
        </form>
      </div>
    </div>
  );
}

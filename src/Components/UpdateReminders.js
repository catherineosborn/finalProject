import React, { useState } from "react";

export default function UpdateReminders({ reminder, onUpdateReminder }) {
  const [updatedReminder, setUpdatedReminder] = useState(reminder.reminderMessage);

  const handleUpdate = () => {
    onUpdateReminder(updatedReminder);
  };

  return (
    <div>
      <h3>Update Reminder</h3>
      <input
        type="text"
        value={updatedReminder}
        onChange={(e) => setUpdatedReminder(e.target.value)}
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}
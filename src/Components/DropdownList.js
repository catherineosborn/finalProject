import React from 'react';
import DropdownCards from './DropdownCards';

export default function DropdownList({ reminders, handleCompleteReminder }) {
    if (!reminders) {
        return <div>Loading reminders...</div>; 
      }

      return (
        <div>
          {reminders.map((reminder) => (
            <DropdownCards
              key={reminder.id}
              reminder={reminder}
              onComplete={() => handleCompleteReminder(reminder)}
            />
          ))}
        </div>
      );
}
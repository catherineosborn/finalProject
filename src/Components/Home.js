import React from "react";
import HomePageCard from "./HomePageCards";

export default function Home() {
  return (
    <div>
      <HomePageCard
        to="/CreateNewReminders"
        title="Create New Reminders"
        text="Create new reminders for your tasks."
        buttonText="Go to Create New Reminders"
      />
      <HomePageCard
        to="/ViewReminders"
        title="View Reminders"
        text="View your existing reminders."
        buttonText="Go to View Reminders"
      />
    </div>
  );
}
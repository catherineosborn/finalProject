import React from "react";
import HomePageCard from "./HomePageCards";

export default function Home() {
  return (
    <div>
      <HomePageCard to="/CreateNewReminders" />
      <HomePageCard to="/ViewReminders" />
    </div>
  );
}
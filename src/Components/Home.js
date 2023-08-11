import React from "react";
import Bar from "./Navbar";
import HomePageCard from "./HomePageCards";

export default function Home() {
    return (
        <div>
        <Bar/>
        <div>
        <HomePageCard />
        <HomePageCard/>
        </div>
        </div>
    );
}
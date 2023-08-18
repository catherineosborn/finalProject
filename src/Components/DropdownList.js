import React, { useState, useEffect } from "react";

export default function DropdownList() {
    const [reminders, setReminders] = useState([]);
    const MOCK_API_URL = "https://64d6529b754d3e0f1361f3fa.mockapi.io/Reminder";

    useEffect(() => {
        fetch(MOCK_API_URL)
            .then(data => setReminders(data))
            .catch(error => console.error("Error fetching reminders: ", error));
    }, []);
    
    return(
        "list here"
    );
}
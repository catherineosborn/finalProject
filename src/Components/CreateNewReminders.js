import { useState } from "react";

export default function CreateNewReminders({ postNewReminder, handleNewReminder }){

    const MOCK_API_URL = "https://64d6529b754d3e0f1361f3fa.mockapi.io/Reminder";

    const [newReminder, setNewReminders] = useState('')
    const [newCreatedDate, setNewCreatedDate] = useState(data.newCreatedDate)
    const [completedStatus, setCompletedStatus] = useState(data.completedStatus)

    function postNewReminder(e){
        e.preventDefault()

        let data = {
            reminderMessage: newReminderMessage,
            createdDate: newCreatedDate,
            completed: completedStatus,
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
            setNewCreatedDate(data.newCreatedDate);
            setCompletedStatus(data.completedStatus);
        })
        .catch(error => {
            console.error("Error: ", error);
        });
    }
    return (
        <div className="App">

        <form className='newReminderBox'>
            <h3>New Reminder:</h3>
            <label>Reminder Message: </label>
            <input onChange={(e) => setNewReminders(e.target.value)}></input><br></br>
            <label>Job Title: </label>
            <input onChange={(e) => setNewCreatedDate(e.target.value)}></input><br></br>
            <label>Company Name: </label>
            <input onChange={(e) => setCompletedStatus(e.target.value)}></input><br></br>
            <button onClick={(e) => postNewReminder(e)}>Submit</button>
        </form>
        </div>
        );
}
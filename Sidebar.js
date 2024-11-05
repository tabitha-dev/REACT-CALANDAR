import React, { useState } from 'react';

const Sidebar = ({ selectedDay, addEvent, deleteEvent, events }) => {
  const [eventTitle, setEventTitle] = useState('');

  // Handle adding an event
  const handleAddEvent = () => {
    if (!selectedDay) {
      alert('Please select a day to add an event.');
      return;
    }
    if (!eventTitle.trim()) {  // Trim to avoid adding empty spaces as events
      alert('Please enter a valid event title.');
      return;
    }

    addEvent(eventTitle.trim());
    setEventTitle(''); // Clear the input field after adding the event
  };

  // Get events for the selected day
  const eventsForSelectedDay = selectedDay
    ? events[new Date(new Date().getFullYear(), new Date().getMonth(), selectedDay).toDateString()] || []
    : [];

  return (
    <div className="sidebar">
      {/* Display the selected day */}
      <h4>{selectedDay ? `Selected Day: ${selectedDay}` : 'No Day Selected'}</h4>

      {/* Add Event Section */}
      <div className="add-event-form">
        <h4>Add Event</h4>
        <input
          type="text"
          value={eventTitle}
          placeholder="Enter event title"
          onChange={(e) => setEventTitle(e.target.value)}
        />
        <button onClick={handleAddEvent}>Add Event</button>
      </div>

      {/* Show Events for Selected Day */}
      <div className="events-list">
        <h4>Events</h4>
        {eventsForSelectedDay.length > 0 ? (
          <ul>
            {eventsForSelectedDay.map((event, index) => (
              <li key={index}>
                {event}
                <button
                  onClick={() => {
                    if (window.confirm("Are you sure you want to delete this event?")) {
                      deleteEvent(selectedDay, index);
                    }
                  }}
                  className="delete-button"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No events for this day.</p>
        )}
      </div>
    </div>
  );
};

export default Sidebar;

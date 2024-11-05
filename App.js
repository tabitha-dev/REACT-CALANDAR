import React, { useState, useEffect } from 'react';
import CalendarDay from './components/CalendarDay';
import Sidebar from './components/Sidebar';
import StickerForm from './components/StickerForm';
import axios from 'axios';
import './App.css';
import { Typography, Button } from '@mui/material';

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);
  const [events, setEvents] = useState(() => {
    const storedEvents = localStorage.getItem('events');
    return storedEvents ? JSON.parse(storedEvents) : {};
  });
  const [stickers, setStickers] = useState(() => {
    const storedStickers = localStorage.getItem('stickers');
    return storedStickers ? JSON.parse(storedStickers) : {};
  });
  const [holidays, setHolidays] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update current time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Fetch holidays from the API
  useEffect(() => {
    const fetchHolidays = async () => {
      const year = currentDate.getFullYear();
      const options = {
        method: 'GET',
        url: `https://public-holiday.p.rapidapi.com/${year}/US`,
        headers: {
          'x-rapidapi-key': '71e3466119mshfcff9f6775e9a01p16c9ecjsn646561b6676e',
          'x-rapidapi-host': 'public-holiday.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        setHolidays(response.data); // Save the holidays for the whole year
      } catch (error) {
        console.error('Error fetching holidays:', error);
      }
    };

    fetchHolidays();
  }, [currentDate]);

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  // Add an event for the selected day and save it in local storage
  const addEvent = (eventTitle) => {
    if (!selectedDay) {
      alert("Please select a day first.");
      return;
    }

    const dateStr = new Date(currentDate.getFullYear(), currentDate.getMonth(), selectedDay).toDateString();
    const updatedEvents = {
      ...events,
      [dateStr]: [...(events[dateStr] || []), eventTitle],
    };

    setEvents(updatedEvents);
    localStorage.setItem('events', JSON.stringify(updatedEvents)); // Save events to local storage
  };

  // Delete an event from the selected day and update local storage
  const deleteEvent = (day, eventIndex) => {
    const dateStr = new Date(currentDate.getFullYear(), currentDate.getMonth(), day).toDateString();
    const updatedEvents = { ...events };

    updatedEvents[dateStr].splice(eventIndex, 1); // Remove the event at the specified index

    if (updatedEvents[dateStr].length === 0) {
      delete updatedEvents[dateStr]; // Remove the key if no events left for the day
    }

    setEvents(updatedEvents);
    localStorage.setItem('events', JSON.stringify(updatedEvents)); // Update local storage
  };

  // Add a sticker with context for the selected day and save it in local storage
  const addSticker = (stickerObj) => {
    if (!selectedDay) {
      alert("Please select a day first.");
      return;
    }

    const dateStr = new Date(currentDate.getFullYear(), currentDate.getMonth(), selectedDay).toDateString();
    const updatedStickers = {
      ...stickers,
      [dateStr]: [...(stickers[dateStr] || []), stickerObj],
    };

    setStickers(updatedStickers);
    localStorage.setItem('stickers', JSON.stringify(updatedStickers)); // Save stickers to local storage
  };

  // Delete a sticker from the selected day and update local storage
  const deleteSticker = (day, stickerIndex) => {
    const dateStr = new Date(currentDate.getFullYear(), currentDate.getMonth(), day).toDateString();
    const updatedStickers = { ...stickers };

    updatedStickers[dateStr].splice(stickerIndex, 1); // Remove the sticker at the specified index

    if (updatedStickers[dateStr].length === 0) {
      delete updatedStickers[dateStr]; // Remove the key if no stickers left for the day
    }

    setStickers(updatedStickers);
    localStorage.setItem('stickers', JSON.stringify(updatedStickers)); // Update local storage
  };

  const renderCalendarDays = () => {
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay(); // Get which day of the week the 1st falls on
    const days = [];

    // Fill in blank days until the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`blank-${i}`} className="calendar-day blank-day"></div>);
    }

    // Fill in the actual days
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        <CalendarDay
          key={day}
          day={day}
          currentDate={currentDate}
          holidays={holidays}
          events={events}
          stickers={stickers}
          today={new Date().toDateString()}
          setSelectedDay={setSelectedDay}
        />
      );
    }

    return days;
  };

  return (
    <div className="app">
      <div className="header">
        <Typography variant="h4">React Calendar</Typography>
        <Typography variant="h6">Current Time: {currentTime.toLocaleTimeString()}</Typography>
      </div>

      <div className="calendar-navigation">
        <Button onClick={handlePrevMonth}>Previous</Button>
        <Typography variant="h5">
          {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
        </Typography>
        <Button onClick={handleNextMonth}>Next</Button>
      </div>

      {/* Main Container to Hold Calendar and Sidebar */}
      <div className="main-container">
        <div className="calendar-grid">
          <div className="calendar-day-name">Sun</div>
          <div className="calendar-day-name">Mon</div>
          <div className="calendar-day-name">Tue</div>
          <div className="calendar-day-name">Wed</div>
          <div className="calendar-day-name">Thu</div>
          <div className="calendar-day-name">Fri</div>
          <div className="calendar-day-name">Sat</div>
          {renderCalendarDays()}
        </div>

        {/* Sidebar to add events and stickers */}
        <div className="sidebar">
          <Sidebar
            selectedDay={selectedDay}
            events={events}
            addEvent={addEvent}
            deleteEvent={deleteEvent}
          />
          <StickerForm
            selectedDay={selectedDay}
            stickers={stickers}
            addSticker={addSticker}
            deleteSticker={deleteSticker}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

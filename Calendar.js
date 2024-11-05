import React from 'react';
import CalendarDay from './CalendarDay';
import './Calendar.css';

const Calendar = ({ currentDate, holidays, events, stickers, setSelectedDay }) => {
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
    <div className="calendar-grid">
      {/* Day Names */}
      <div className="calendar-day-name">Sun</div>
      <div className="calendar-day-name">Mon</div>
      <div className="calendar-day-name">Tue</div>
      <div className="calendar-day-name">Wed</div>
      <div className="calendar-day-name">Thu</div>
      <div className="calendar-day-name">Fri</div>
      <div className="calendar-day-name">Sat</div>

      {/* Render Calendar Days */}
      {renderCalendarDays()}
    </div>
  );
};

export default Calendar;

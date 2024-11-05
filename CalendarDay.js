import React from 'react';

const CalendarDay = ({ day, currentDate, holidays, events, stickers, today, setSelectedDay }) => {
  const dateStr = new Date(currentDate.getFullYear(), currentDate.getMonth(), day).toDateString();

  // Check if it's today
  const isToday = dateStr === today;

  // Get holidays for the current day
  const holiday = holidays.find(holiday => new Date(holiday.date).toDateString() === dateStr);

  // Events for the day
  const eventsForDay = events[dateStr] || [];

  // Stickers for the day
  const stickersForDay = stickers[dateStr] || [];

  return (
    <div 
      className={`calendar-day ${isToday ? 'today' : ''}`} 
      onClick={() => setSelectedDay(day)}
      aria-label={`Day ${day}, ${eventsForDay.length} events, ${stickersForDay.length} stickers`}
    >
      <div>{day}</div>

      {/* Display Holiday */}
      {holiday && <div className="holiday">🎉 {holiday.name}</div>}

      {/* Display Event Count */}
      {eventsForDay.length > 0 && <div>📌 {eventsForDay.length} event(s)</div>}

      {/* Display Stickers */}
      {stickersForDay.map((stickerObj, index) => (
        <div key={index} className="sticker">
          <span role="img" aria-label="sticker">{stickerObj.sticker}</span>
          {stickerObj.context && <span className="sticker-context"> - {stickerObj.context}</span>}
        </div>
      ))}
    </div>
  );
};

export default CalendarDay;

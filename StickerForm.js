import React, { useState } from 'react';

const StickerForm = ({ selectedDay, stickers, addSticker, deleteSticker }) => {
  const [selectedSticker, setSelectedSticker] = useState('');
  const [stickerContext, setStickerContext] = useState('');

  // Handle adding a sticker
  const handleAddSticker = () => {
    if (!selectedDay) {
      alert('Please select a day to add a sticker.');
      return;
    }
    if (!selectedSticker) {
      alert('Please select a sticker.');
      return;
    }

    addSticker({ sticker: selectedSticker, context: stickerContext });
    setSelectedSticker(''); // Clear the sticker selection after adding
    setStickerContext('');  // Clear the context input after adding
  };

  // Get stickers for the selected day
  const stickersForSelectedDay = selectedDay
    ? stickers[new Date(new Date().getFullYear(), new Date().getMonth(), selectedDay).toDateString()] || []
    : [];

  return (
    <div className="sticker-form">
      <h4>Add Sticker</h4>
      <select value={selectedSticker} onChange={(e) => setSelectedSticker(e.target.value)}>
        <option value="">Select Sticker</option>
        <option value="🌟">Star</option>
        <option value="🎉">Celebration</option>
        <option value="🚀">Rocket</option>
        <option value="🎈">Balloon</option>
        <option value="💡">Light Bulb</option>
        <option value="📅">Calendar</option>
        <option value="🎵">Musical Note</option>
        <option value="🌈">Rainbow</option>
        <option value="🌹">Rose</option>
        <option value="☕">Coffee Cup</option>
        <option value="📚">Books</option>
        <option value="🧠">Brain</option>
        <option value="⚽">Soccer Ball</option>
        <option value="🌳">Tree</option>
        <option value="🌙">Crescent Moon</option>
        <option value="🍀">Four Leaf Clover</option>
        <option value="⭐">Shooting Star</option>
        <option value="🔥">Fire</option>
        <option value="🎁">Gift</option>
        <option value="🐱">Cat</option>
        <option value="🐶">Dog</option>
        <option value="🐬">Dolphin</option>
        <option value="🌍">Earth</option>
        <option value="🍔">Hamburger</option>
        <option value="🍕">Pizza</option>
        <option value="🍩">Donut</option>
        <option value="🦄">Unicorn</option>
        <option value="🤖">Robot</option>
        <option value="👾">Alien Monster</option>
        <option value="🏰">Castle</option>
        <option value="🚗">Car</option>
        <option value="✈️">Airplane</option>
        <option value="🧩">Puzzle Piece</option>
        <option value="🔮">Crystal Ball</option>
        <option value="🎄">Christmas Tree (Christmas)</option>
        <option value="🎅">Santa Claus (Christmas)</option>
        <option value="🕎">Menorah (Hanukkah)</option>
        <option value="🍂">Maple Leaf (Thanksgiving)</option>
        <option value="🦃">Turkey (Thanksgiving)</option>
        <option value="🎃">Jack-O-Lantern (Halloween)</option>
        <option value="🧨">Firecracker (Chinese New Year)</option>
        <option value="🏮">Lantern (Chinese New Year)</option>
        <option value="🎉">Party Popper (New Year's Eve)</option>
        <option value="🎆">Fireworks (Independence Day)</option>
        <option value="🐇">Rabbit (Easter)</option>
        <option value="🥚">Egg (Easter)</option>
        <option value="💘">Heart (Valentine's Day)</option>
        <option value="🍀">Four Leaf Clover (St. Patrick's Day)</option>
        <option value="🌹">Rose (Valentine's Day)</option>
        <option value="🔯">Star of David (Jewish Holidays)</option>
        <option value="🕊️">Dove (International Peace Day)</option>
        <option value="🛠️">Hammer and Sickle (International Workers' Day)</option>
        <option value="🌍">Earth (Earth Day)</option>
        <option value="🪔">Diya Lamp (Diwali)</option>
        <option value="🛍️">Shopping Bags (Black Friday)</option>
        <option value="🎓">Graduation Cap</option>
      </select>

      {/* Context Input for Sticker */}
      <input
        type="text"
        value={stickerContext}
        placeholder="Enter context for sticker"
        onChange={(e) => setStickerContext(e.target.value)}
      />

      <button onClick={handleAddSticker}>Add Sticker</button>

      {/* Display stickers for the selected day */}
      <div className="stickers-list">
        <h4>Stickers for {selectedDay ? `Day ${selectedDay}` : 'No Day Selected'}</h4>
        {stickersForSelectedDay.length > 0 ? (
          <ul>
            {stickersForSelectedDay.map((sticker, index) => (
              <li key={index}>
                {sticker.sticker} - {sticker.context}
                <button
                  onClick={() => {
                    if (window.confirm("Are you sure you want to delete this sticker?")) {
                      deleteSticker(selectedDay, index);
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
          <p>No stickers for this day.</p>
        )}
      </div>
    </div>
  );
};

export default StickerForm;

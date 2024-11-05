# 🌟 REACT CALENDAR 🌟

_A sleek and interactive calendar application built with React, allowing you to manage events and stickers effortlessly. Features include holiday tracking and persistent local storage for user convenience._

---

## 📑 Table of Contents

- [📋 Overview](#-overview)
- [✨ Features](#-features)
- [🛠 Technologies Used](#-technologies-used)
- [⚙️ Installation](#%EF%B8%8F-installation)
- [🚀 Usage](#-usage)
- [🧩 Components](#-components)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)

---

## 📋 Overview

The **REACT CALENDAR** app is crafted to help users stay organized by keeping track of events, holidays, and custom stickers. It dynamically updates the current time and highlights today’s date, making it a convenient tool for daily planning.

---

## ✨ Features

- **Dynamic Calendar** 📅: Automatically adjusts to the current month and year.
- **Event Management** 📝: Add, view, and delete events for selected days.
- **Stickers** 🎉: Attach fun and meaningful stickers to days for quick reference.
- **Holiday API Integration** 🏖: Fetches and highlights public holidays using an external API.
- **Local Storage** 💾: Saves events and stickers locally, so data persists between sessions.
- **Responsive Design** 📱💻: Optimized for both desktop and mobile devices.

---

## 🛠 Technologies Used

- **React** ⚛️: For building the user interface.
- **Axios** 🌐: For making API requests.
- **Material-UI** 🎨: For UI components like buttons and typography.
- **CSS** 🎨: Custom styles for a polished and modern look.

---

## ⚙️ Installation

# Clone the repository
git clone https://github.com/tabitha-dev/REACT-CALENDAR.git

# Navigate to the project directory
cd REACT-CALENDAR

# Install dependencies
npm install

# Start the development server
npm start

# The app should now be running on:
# http://localhost:3000


🚀 Usage
Navigating the Calendar: Use the "Previous" and "Next" buttons to switch between months.
Adding Events 🗓️: Click on a day to select it, enter an event title in the sidebar, and click "Add Event".
Adding Stickers 🌈: Select a day, choose a sticker from the dropdown, add context if needed, and click "Add Sticker".
Deleting Items ❌: Use the "Delete" buttons next to events and stickers to remove them.
Holiday Information 🎊: Holidays are automatically highlighted if fetched successfully from the API.

🧩 Components
App.js: Manages the main calendar logic and data handling.
Calendar.js: Displays the grid of days and handles date calculations.
CalendarDay.js: Renders individual days with events, stickers, and holiday highlights.
Sidebar.js: Sidebar for adding and managing events.
StickerForm.js: Handles sticker selection and context addition.
index.js: Entry point that renders the app in the DOM.
🤝 Contributing
We welcome contributions to enhance this project! Feel free to:

Fork the repository.
Create a new branch for your feature or bug fix.
Submit a pull request with a clear explanation of your changes.
Please ensure your code follows best practices and is well-documented.

📜 License
This project is licensed under the MIT License. For more details, refer to the LICENSE file.



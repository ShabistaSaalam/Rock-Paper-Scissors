# Rock-Paper-Scissors

A responsive, browser-based implementation of the classic **Rock-Paper-Scissors** game, developed using standard web technologies. This project demonstrates interactive UI design, game logic implementation, and DOM manipulation using modern front-end development practices.

---

## 🧰 Technologies & Tools

### Front-End Technologies
- **HTML5** – Semantic structure and content definition.
- **CSS3** – Custom styling, layout control, and responsive design.

### Layout & Styling Techniques
- **CSS Grid Layout** – Used for organizing the primary game interface in a structured grid (`.main-container`).
- **CSS Flexbox** – Employed for flexible and responsive alignment of buttons, score displays, and status headers.
- **Media Queries** – Ensures responsiveness across different screen sizes (e.g., scaling down the game container on smaller viewports).
- **Custom Fonts** – Google Fonts (`Josefin Sans`, `PT Sans`) are imported to enhance visual presentation and readability.

### JavaScript Features
- **Vanilla JavaScript (ES6)** – No libraries or frameworks used; the project relies solely on native JS.
- **DOM Manipulation** – Dynamic updates to game status, scoreboards, and UI components based on user interaction.
- **Event Handling** – Utilizes `addEventListener` for button-based user input and game flow control.
- **Randomization** – Generates random moves for the computer using `Math.random()`.
- **State Management** – Maintains and updates player and computer scores, tracks game progress, and handles restart logic.

---

## 📁 Project Structure


├── index.html # Defines the game layout and imports resources
├── styles.css # Handles layout, design, and responsiveness
├── script.js # Implements the game logic and interactivity
└── README.md # Project documentation


---

## 🕹️ How to Play

1. Open `index.html` in any modern browser.
2. Click on one of the three buttons: **Rock**, **Paper**, or **Scissors**.
3. The computer selects a move at random.
4. The result of the round is displayed, and scores are updated accordingly.
5. The game continues until either the player or the computer wins 5 rounds.
6. Restart the game using the "Restart Game" button.

---

## 🎯 Features

- Clean, minimalistic, and responsive UI
- Real-time score tracking
- Random computer move generation
- Dynamic game state and restart functionality
- Lightweight and dependency-free (pure HTML/CSS/JS)

---

## 📈 Potential Enhancements

- Add animations and transitions for moves
- Include audio feedback for win/loss events
- Replace text-based moves with SVG icons or images
- Implement multiplayer or difficulty levels (AI-based logic)

---

## 🔖 License

This project is open-source and available for personal, academic, or non-commercial use.

---

## 👨‍💻 Author

Created as a demonstration of core front-end development principles using modern browser technologies.


# MacOS-Calculator-Web
MacOS Calculator in Vanilla JS. Focused on replicating the macOS dark mode UI while handling tricky logic like operator overwriting and sign-toggling.
# MacOS Calculator

A pixel-perfect, dark-mode calculator web app inspired by the classic macOS design. This project was built as a challenge to master vanilla JavaScript logic and CSS Grid layouts.



## 🚀 Features
- **Dynamic Display:** Handles up to 12 digits with automatic overflow prevention.
- **Smart Operators:** Prevents operator stacking (e.g., typing `++` or `+*`) by overwriting with the latest selection.
- **Modifier Keys:** Fully functional `AC` (All Clear), `+/-` (Sign Toggle), and `%` (Percentage) buttons.
- **Clean UI:** Responsive CSS Grid layout with hover and active states for a tactile feel.
- **Math Engine:** Parses strings into tokens for calculation without using the `eval()` function and follows all the Precedence rules.

## 🛠️ Tech Stack
- **HTML5:** Semantic structure using buttons for accessibility.
- **CSS3:** Custom properties, CSS Grid, and Flexbox for centering.
- **JavaScript:** DOM manipulation, Event Listeners, and Regular Expressions (Regex) for logic.

## 🔧 How to Run
1. Clone this repository: `https://github.com/SHZunknown11/MacOS-Calculator-Web`
2. Open `index.html` in your favorite browser.

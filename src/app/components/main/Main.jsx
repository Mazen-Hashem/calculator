"use client";

// Import stylesheet for the Main layout
import "./main.css";

// Import the two main sections inside the <main> area
import History from "./history/History";     // Component that displays the calculation history
import Calculator from "./calculator/Calculator"; // Component for the calculator UI and logic

export default function Main() {
  return(
    <main>
      <div className="container">
        <History />
        <Calculator />
      </div>
    </main>
  )
}

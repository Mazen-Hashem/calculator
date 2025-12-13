"use client";

// Import stylesheet for the History component
import "./history.css";

import { useContext } from "react";

import { CalculatorContext } from "@/context/CalculatorContext"; // Access global calculator state
import Item from "./item/Item"; // Component for rendering a single history entry

export default function History() {
  // Extract calculation history from context
  const { historyData } = useContext(CalculatorContext);

  // Create a list of <Item /> components from the history array
  const createItems = historyData.map((item, index) => {
    return (
      <Item
        key={index + 1} // Unique key for React list rendering
        text={item}     // Pass the history entry text to the Item component
      />
    );
  });

  return (
    <div className="history">
      {/* Section title */}
      <h2 className="history-title">History</h2>

      {/* Scrollable container for long histories */}
      <div className="scroll-box">
        <ul className="list">
          {createItems} {/* Render all history items */}
        </ul>
      </div>
    </div>
  );
}
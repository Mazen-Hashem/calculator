"use client";

// Import styles for the button
import "./button.css";

// Reusable button component
export default function Button(props) {
  return (
    <button
      className={props.className}   // Applies styling class
      data-action={props.dataAction} // Custom attribute used to identify the button's role
      onClick={props.onClick}        // Function to run when the button is clicked
    >
      {props.text}                   {/* Visible text on the button */}
    </button>
  );
}
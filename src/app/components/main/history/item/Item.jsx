"use client";

// Import styles for a single history list item
import "./item.css";

// Item component represents one entry in the history list
export default function Item(props) {

  return (
    <li className="item">{props.text}</li>
  )
}
"use client";

// Import calculator stylesheet
import "./calculator.css";

// Import button definitions (each button has text, action, and className)
import { btnsData } from "./buttons/buttonsData";

// Reusable button component
import Button from "./buttons/Button";

import { useContext, useEffect, useRef } from "react";

import { CalculatorContext } from "@/context/CalculatorContext"; // Global calculator state
import { evaluate } from "mathjs"; // Math parsing library

export default function Calculator() {

  // Access global expression/result/history + their updater functions
  const { calculatorData, setCalculatorData, setHistoryData } = useContext(CalculatorContext);

  // Reference to the scrollable expression box (for auto-scroll)
  const scrollBoxRef = useRef(null);

  /* ------------------------------
      MAIN CLICK HANDLER
  -------------------------------*/
  function handleClick(dataAction) {
    setCalculatorData((prev) => {
      let { expression, result } = prev;

      switch (dataAction) {

        // AC button → clear expression
        case "clear":
          expression = "";
          break;

        // DEL button → delete last character or entire function name
        case "delete":
          // Functions that should be removed as a whole
          const functions = ["sin(", "cos(", "tan(", "sqrt("];

          // Check if the current expression ends with any full function
          let matchedFunc = functions.find((fn) => expression.endsWith(fn));

          if (matchedFunc) {
            // Remove the entire function name at once
            expression = expression.slice(0, -matchedFunc.length);
          } else {
            // Otherwise delete only the last character
            expression = expression.slice(0, -1);
          }
          break;

        // Equals (=) button → evaluate final expression
        case "equals":
          // Only calculate valid result and non-empty expression
          if (expression && result !== "Error") {
            expression = handleEvaluate(expression);
          }
          break;

        // Default → append button value to expression
        default:
          expression += dataAction;
      }

      // Live result preview (except when pressing equals)
      if (dataAction !== "equals") {
        result = expression ? handleEvaluate(expression) : "0";
      }

      return { ...prev, expression, result };
    });

    // If equals was pressed, add to history
    addInHistory(dataAction);
  }

  /* ------------------------------
      CALCULATE THE EXPRESSION EVALUATION
  -------------------------------*/
  function handleEvaluate(expression) {
    try {
      return String(evaluate(expression));
    } catch {
      return "Error";
    }
  }

  /* ------------------------------
      ADDING CALCULATIONS TO HISTORY
  -------------------------------*/
  function addInHistory(dataAction) {
    if (dataAction === "equals") {
      let { expression, result } = calculatorData;

      // Only store valid result and non-empty expression
      if (expression !== "" && result !== "Error") {
        setHistoryData((prev) => [...prev, `${expression} = ${result}`]);
      }
    }
  }

  /* ------------------------------
      AUTO-SCROLL FOR LONG EXPRESSIONS
  -------------------------------*/
  useEffect(() => {
    const box = scrollBoxRef.current;
    if (!box) return;

    // Scroll only if content overflows horizontally
    if (box.scrollWidth > box.clientWidth) {
      box.scrollLeft = box.scrollWidth; // Auto-scroll to the right-end
    }
  }, [calculatorData.expression]);

  /* ------------------------------
      RENDER UI
  -------------------------------*/
  return (
    <div className="calculator">

      {/* Screen (expression + result) */}
      <div className="screen">

        {/* Scrollable expression line */}
        <div className="scroll-box" ref={scrollBoxRef}>
          <p className="operation">{calculatorData.expression}</p>
        </div>

        {/* Result line */}
        <div className="scroll-box">
          <p className="result">{calculatorData.result}</p>
        </div>

      </div>

      {/* Buttons grid */}
      <div className="btns-box">
        {/* Loop through all calculator buttons */}
        {btnsData.map((btn, index) => {
          return (
            <Button
              key={index + 1}                   // Unique key for React (index-based)
              className={btn.className}         // CSS class for styling (number, operator, etc.)
              dataAction={btn.dataAction}       // The action identifier ("1", "+", "sin", "AC")
              text={btn.text}                   // The visible label on the button
              onClick={() => handleClick(btn.dataAction)}
            // When the button is clicked, pass its action value to the click handler
            />
          );
        })}
      </div>

    </div>
  );
}

"use client";

// Import React functions for creating context and state
import { createContext, useState } from "react";

// Create a Context object for the calculator
// This allows components to access calculator state globally without prop drilling
export const CalculatorContext = createContext();

// This is the Provider component that wraps around parts of the app
// Components inside this provider can access the calculator context
export default function CalculatorProvider({ children }) {
  
  // State to hold the current calculator expression and result
  const [calculatorData, setCalculatorData] = useState({
    expression: "", // Stores the arithmetic operations as a string ("1+1")
    result: "0"      // Stores the evaluated result as a string ("2")
  });

  // State to hold the history of calculations
  const [historyData, setHistoryData] = useState([]);

  return (
    // Provide the calculatorData, setter functions, and historyData to children components
    <CalculatorContext.Provider 
      value={{ 
        calculatorData,    // current expression and result
        setCalculatorData, // function to update expression/result
        historyData,       // array of previous calculations
        setHistoryData     // function to update calculation history
      }}
    >
      {children} {/* Render all child components inside the provider */}
    </CalculatorContext.Provider>
  );
}

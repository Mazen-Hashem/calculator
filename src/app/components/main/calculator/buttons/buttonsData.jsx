"use client";

// This is the buttons data of the calculator, that will map() on it.
export const btnsData = [
  // Row 1: Clear, Delete, %, Divide
  { className: "btn", dataAction: "clear", text: "AC" },
  { className: "btn", dataAction: "delete", text: "DEL" },
  { className: "btn", dataAction: "%", text: "%" },
  { className: "btn op", dataAction: "/", text: "÷" },

  // Row 2: Numbers + Multiply
  { className: "btn", dataAction: "7", text: "7" },
  { className: "btn", dataAction: "8", text: "8" },
  { className: "btn", dataAction: "9", text: "9" },
  { className: "btn op", dataAction: "*", text: "×" },

  // Row 3: Numbers + Subtract
  { className: "btn", dataAction: "4", text: "4" },
  { className: "btn", dataAction: "5", text: "5" },
  { className: "btn", dataAction: "6", text: "6" },
  { className: "btn op", dataAction: "-", text: "−" },

  // Row 4: Numbers + Add
  { className: "btn", dataAction: "1", text: "1" },
  { className: "btn", dataAction: "2", text: "2" },
  { className: "btn", dataAction: "3", text: "3" },
  { className: "btn op", dataAction: "+", text: "+" },

  // Row 5: Zero, Decimal, Equals
  { className: "btn g-4", dataAction: "0", text: "0" }, // double width
  { className: "btn", dataAction: ".", text: "." },
  { className: "btn eq", dataAction: "equals", text: "=" },

  // Row 6: Functions
  { className: "btn", dataAction: "sin(", text: "sin" },
  { className: "btn", dataAction: "cos(", text: "cos" },
  { className: "btn", dataAction: "tan(", text: "tan" },
  { className: "btn", dataAction: "sqrt(", text: "√" },

  // Row 7: Parentheses, Constants, Powers
  { className: "btn g-1 r-side", dataAction: "(", text: "(" }, // half width
  { className: "btn g-1 l-side", dataAction: ")", text: ")" }, // half width
  { className: "btn g-1 r-side", dataAction: "e", text: "e" }, // half width
  { className: "btn g-1 l-side", dataAction: "pi", text: "π" }, // half width
  { className: "btn", dataAction: "^2", text: "x²" },
  { className: "btn", dataAction: "^", text: "^" }
];
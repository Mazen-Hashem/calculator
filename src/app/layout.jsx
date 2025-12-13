// Import the global CSS for the entire application
import "./globals.css";

// Import the context provider for the calculator
// This provides global state (current expression, result, and history) to all components
import CalculatorProvider from "../context/CalculatorContext";

// Metadata for the app (used by Next.js for <head> info)
export const metadata = {
  title: "Calculator",          // The title of the web page
  description: "Responsive scientific calculator with basic and advanced math functions, live evaluation, smart delete, and history. Built using Next.js and Math.js.", // Description for SEO and accessibility
};

// RootLayout component wraps the entire app
// This is a Next.js 13+ convention for layouts
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Wrap all children components with CalculatorProvider */}
        {/* This allows any component in the app to access the calculator context */}
        <CalculatorProvider>
          {children} {/* Render the page content inside the provider */}
        </CalculatorProvider>
      </body>
    </html>
  );
}

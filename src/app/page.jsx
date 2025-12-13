// Import the stylesheet for the app component
import "./app.css";

// Import the main components of the app
import Header from "./components/header/Header"; // Top section of the app (App name)
import Main from "./components/main/Main";       // Main content area of the app
import Footer from "./components/footer/Footer"; // Bottom section (copyright)

// The root App component
export default function App() {
  return (
    // Container div for the whole application
    <div className="app">
      <Header /> {/* Render the header component */}
      <Main />   {/* Render the main content component */}
      <Footer /> {/* Render the footer component */}
    </div>
  );
}

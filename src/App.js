import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes instead of Route and Switch
import HomeScreen from "./screens/HomeScreen"; // Import your HomeScreen component
// Import other components/screens as needed

function App() {
  return (
    <Router>
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<HomeScreen />} /> {/* Use 'element' instead of 'component' */}
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
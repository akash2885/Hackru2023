import React, { useState } from "react";

function TripPlannerScreen() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  return (
    <div style={{ backgroundColor: "white", width: "100%", height: "100%" }}>
      <h2>New Jersey Trip Planner</h2>
      <p>An AI-Generated Trip Planner catered to you and your needs :)</p>
      
      <div>
        <label htmlFor="origin">Origin:</label>
        <input
          type="text"
          id="origin"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="destination">Destination:</label>
        <input
          type="text"
          id="destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>

      {/* Additional trip planning features can be added here */}
    </div>
  );
}

export default TripPlannerScreen;

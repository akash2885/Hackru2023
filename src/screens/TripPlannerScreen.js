import React, { useState, useEffect } from "react";
import axios from "axios";

function TripPlannerScreen() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const backgroundStyle = {
    // backgroundImage: `url(${bg1})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
  };

  useEffect(() => {
    // Define an async function to fetch data from the API
    async function fetchData() {
      try {
        const response = await axios.get(
          "172.31.74.216"
        );

        // Set the data in the state
        setData(response.data);
      } catch (error) {
        // Handle errors
        setError(error);
      }
    }

    // Call the fetchData function when the component mounts
    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div style={backgroundStyle}>
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

      {error ? (
        <p>Error: {error.message}</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TripPlannerScreen;

import React from "react";
import MapScreen from "./MapScreen";
import TripPlannerScreen from "./TripPlannerScreen";

function HomeScreen() {
  return (
    <div className="home-screen">
      <div className="left-panel" style={{ width: "50%", float: "left" }}>
        <TripPlannerScreen />
      </div>

      <div
        className="right-panel"
        id="map"
        style={{ width: "50%", height: "100vh", float: "right" }}
      >
        <MapScreen />
      </div>
    </div>
  );
}

export default HomeScreen;
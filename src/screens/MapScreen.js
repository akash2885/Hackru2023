import React, { useEffect } from "react";

function MapScreen() {
  useEffect(() => {
    // Load the Google Maps JavaScript API
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCX4SYosl2VW14VzNgToYyCDGIUof2QnLM`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      // Initialize the map once the script is loaded
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: 40.7128, lng: -74.0060 }, // Set initial coordinates (New York City)
        zoom: 10, // Adjust the initial zoom level as needed
      });

      // You can add more map customization and functionality here

      // Optionally, you can add markers, polylines, or other elements to the map
    });

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // The map is rendered here
  return (
    <div id="map" style={{ width: "100%", height: "100%" }}></div>
  );
}

export default MapScreen;

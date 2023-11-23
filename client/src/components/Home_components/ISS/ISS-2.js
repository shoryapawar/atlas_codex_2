import axios from "axios";
import React, { useEffect, useState } from "react";

const ISS2 = () => {
  const [cord, setCord] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.wheretheiss.at/v1/satellites/25544");
        const roundedCord = {
          longitude: Math.round(response.data.longitude),
          latitude: Math.round(response.data.latitude),
          velocity: Math.round(response.data.velocity),
          altitude: Math.round(response.data.altitude),
          visibility: response.data.visibility, // Assuming visibility is not a number
        };
        setCord(roundedCord);
        setLoading(false);
      } catch (error) {
        console.error("Error in ISS2 API", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading..</p>
      ) : (
        <div className="ISS-main">
          <h3>International Space Station Info </h3>
          <h5>Longitude: {cord?.longitude}°</h5>
          <h5>Latitude: {cord?.latitude}°</h5>
          <h5>Velocity: {cord?.velocity} km/h</h5>
          <h5>Altitude: {cord?.altitude} km</h5>
          <h5>Visibility: {cord?.visibility}</h5>
        </div>
      )}
    </>
  );
};

export default ISS2;

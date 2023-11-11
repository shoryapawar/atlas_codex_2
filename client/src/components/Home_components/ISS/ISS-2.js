import axios from "axios";
import React, { useEffect, useState } from "react";

const ISS2 = () => {
  const [cord, setCord] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get('https://api.wheretheiss.at/v1/satellites/25544')
      .then((res) => {
        setCord(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error in ISS2 API", error);
        setLoading(false);
      });
  }, []);
  console.log(cord);

  return (

    <>
    {loading ? (
        <p>Loading..</p>
      ) :(
        <div className="ISS-main">
        <h5>ISS Info :</h5>
        <h6>Longitude: {cord.longitude}°</h6>
        <h6>Latitude: {cord.latitude}°</h6>
        <h6>velocity:{cord.velocity} km/h</h6>
        <h6>altitude: {cord.altitude}</h6>
        <h6>Visibility: {cord.visibility}</h6>
       
      </div>
      )}
    </>
    
  );
};

export default ISS2;

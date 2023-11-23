import axios from "axios";
import React, { useEffect, useState } from "react";

const ISS = () => {
  const [cord, setCord] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://api.open-notify.org/iss-now.json")
      .then((res) => {
        setCord(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error in ISS API", error);
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
        <h5>About ISS</h5>
        <h6>Longitude:{cord.iss_position?.longitude}°</h6>
        <h6>Latitude:{cord.iss_position?.latitude}°</h6>
      </div>
      )}
    </>
    
  );
};

export default ISS;

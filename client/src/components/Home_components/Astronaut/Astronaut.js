import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Astronaut.scss"
const Astronaut = () => {
  const [astronauts, setAstronauts] = useState([]);
  useEffect(() => {
    axios
      .get("http://api.open-notify.org/astros.json")
      .then((response) => {
       setAstronauts(response.data.people);
      })
      .catch((error) => {
        console.error("Error in Astronauts API", error);
      });
  }, []);
  // console.log(astronauts);
  return (
    <div className="astronaut-main">
    <h5>Astronauts in Space</h5>
      {astronauts.map((astronaut) => (
        <div  className="astronaut-list">
          <h6><span className="span"></span>{astronaut.name}</h6>
        </div>
      ))}
    </div>
  );
};

export default Astronaut;

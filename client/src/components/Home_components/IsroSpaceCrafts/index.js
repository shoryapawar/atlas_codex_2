import React from "react";
import "./isrospacecraft.scss";
import axios from "axios";
import { useEffect, useState } from "react";
const IsroSpaceCraft = () => {
  const [isrospacecraft, setisrospacecraft] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const Fetchspacecraft = async () => {
      try {
        const res = await axios.get(
          "https://services.isrostats.in/api/spacecraft"
        );
        setisrospacecraft(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error in ISRO Spacecraft API", error);
        setLoading(false);
      }
    };
    Fetchspacecraft();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % isrospacecraft?.length);
    }, 3000); // Adjust the delay as needed (in milliseconds)

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currentIndex, isrospacecraft?.length]);

  // console.log(isrospacecraft);
  return (
    <div className="spacecraft-main">
      <h1>IsroSpaceCrafts</h1>
      {loading ? (
        <div className="laoding">Loading Please wait</div>
      ) : (
        isrospacecraft?.length > 0 && (
          <div className="spacecraft-list">
            <h2>Spacecraft - {isrospacecraft[currentIndex]?.name}</h2>
            <h4>
              Launch Vechile - {isrospacecraft[currentIndex]?.launchVehicle}
            </h4>
            <button>
              <a
                href={isrospacecraft[currentIndex]?.link}
                target="_blank"
                rel="noreferrer"
              >
                Mission Link
              </a>
            </button>
            <h4>{isrospacecraft[currentIndex]?.missionStatus}</h4>
          </div>
        )
      )}
    </div>
  );
};

export default IsroSpaceCraft;

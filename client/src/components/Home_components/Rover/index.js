import { useEffect, useState } from "react";
import axios from "axios";
import "./mars-rover.scss";
const Rover = () => {
  const [roverimg, setRoverimg] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [selectedRover, setSelectedRover] = useState("Curiosity");
  const [sol, setSol] = useState("");
  const [maxSol, setMaxSol] = useState(1000);
  const rovers = ["Spirit", "Opportunity", "Curiosity"];

  useEffect(() => {
    // Fetch maxSol from the API and update the state
    const fetchMaxSol = async () => {
      try {
        const response = await axios.get(
          `https://api.nasa.gov/mars-photos/api/v1/manifests/${selectedRover}?api_key=aZndzgM8ONTa2rwcDrUDdhl19mtNKhWTBMWoaz8g`
        );
        setMaxSol(response.data.photo_manifest.max_sol);
      } catch (error) {
        console.error("Error fetching maxSol", error);
      }
    };
      
    fetchMaxSol();
  }, [selectedRover]);
  //  console.log(maxSol);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${selectedRover}/photos?sol=${sol>0?sol :4003}&api_key=aZndzgM8ONTa2rwcDrUDdhl19mtNKhWTBMWoaz8g`
      );
      setRoverimg(response.data.photos);
      setLoading(false);
    } catch (error) {
      console.error("Error in Mars API", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedRover]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % roverimg.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex, roverimg.length]);

  const handleRoverChange = (event) => {
    const newRover = event.target.value;
    setSelectedRover(newRover, () => {
      fetchData();
    });
  };
  const handleSolChange = (event) => {
    const newSol = Math.min(Math.max(1, event.target.value), maxSol);
    setSol(newSol);
  };

  return (
    <div className="rover-main">
      <div className="left-content">
        <div className="heading">
          <h1>Live Mars Images </h1>
          <span>from</span>
          <h2>{selectedRover} Rover </h2>
        </div>
        <div className="select-rover">
          <label>Select Rover:</label>
          <select value={selectedRover} onChange={handleRoverChange}>
            {rovers.map((rover) => (
              <option key={rover} value={rover}>
                {rover}
              </option>
            ))}
          </select>
        </div>
        <div className="sol">
          <label>Enter Sol [ 1-{maxSol} ]: </label>
          <input
            placeholder="Enter Sol"
            type="text"
            pattern="[0-9]*"
            value={sol}
            onChange={handleSolChange}
          />
          {/* <input placeholder="Enter Sol" type="text" value={sol}></input> */}
        </div>
      </div>
      <div className="right-content">
        {loading ? (
          // <p>Loading Please Wait</p>
          <div className="laoding-div">
            <img src="images/loadingimg.png" alt="loadingimage"></img>
          </div>
        ) : (
          roverimg.length > 0 && (
            <div className="rover">
              <img
                src={roverimg[currentIndex]?.img_src || "images/loadingimg.png"}
                className="image"
                alt={roverimg[currentIndex]?.id}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Rover;

import React, { useEffect, useState } from "react";
import "./mars-rover.scss";
import axios from "axios";

const Rover = () => {
  const [roverimg, setRoverimg] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=aZndzgM8ONTa2rwcDrUDdhl19mtNKhWTBMWoaz8g"
        );
        setRoverimg(response.data.latest_photos);
      } catch (error) {
        console.error("Error in Mars API", error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % roverimg.length);
    }, 3000); // Adjust the delay as needed (in milliseconds)

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currentIndex, roverimg.length]);

  console.log(roverimg);

  return (
    <div className="rover-main">
      <h1>Mars Rover Live images</h1>
      {roverimg.length >0 &&(
           <div className="rover">
          <img src={roverimg[currentIndex].img_src} className="image" alt={roverimg[currentIndex]} />

           </div>
      )}
      {/* <div className="rover"></div>
      {roverimg.map((rover) => (
        <div className="rover-img" key={rover.id}>
          <img src={rover.img_src} className="image" alt={rover.id} />
        </div>
      ))}*/}
    </div> 
  );
};

export default Rover;

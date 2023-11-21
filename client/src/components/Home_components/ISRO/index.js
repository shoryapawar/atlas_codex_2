
import { useEffect, useState } from "react";
import axios from "axios";

const ISRO = () => {
  const [launch, setLaunch] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios
      .get("https://services.isrostats.in/api/launches")
      .then((response) => {
        setLaunch(response.data);
      })
      .catch((error) => {
        console.log("Error in fetching data:", error);
      });
  }, []);

  // Update the current index every 3 seconds 
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % launch.length);
    }, 3000); // Adjust the delay as needed (in milliseconds)

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currentIndex, launch.length]);

  return (
    <div className="isro">
      <h5>ISRO</h5>
      {launch.length > 0 && (
        <div className="launch-list">
          <h6>{launch[currentIndex].Name}</h6>
          <h6>{launch[currentIndex].LaunchDate}</h6>
          <h6>{launch[currentIndex].LaunchType}</h6>
          <h6>{launch[currentIndex].Payload}</h6>
          <a href =  {launch[currentIndex].Link}  target = "_blank"> <h6>Mission Link</h6> </a>
          <h6>{launch[currentIndex].MissionStatus}</h6>
        </div>
      )}
    </div>
  );
  
};

export default ISRO;
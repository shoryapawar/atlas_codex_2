import { useEffect, useState } from "react";
import axios from "axios";

const ISRO = () => {
  const [launch, setLaunch] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://services.isrostats.in/api/launches"
        );
        setLaunch(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error in ISRO Launch API", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % launch.length);
    }, 3000); // Adjust the delay as needed (in milliseconds)

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currentIndex, launch.length]);

  return (
    <div className="isro">
      <h2>ISRO Missions Details </h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        launch.length > 0 && (
          <div className="launch-list">
            <h5>Name : {launch[currentIndex]?.Name}</h5>
            <h6>Lauch Date : {launch[currentIndex]?.LaunchDate}</h6>
            <h6> LaunchType : {launch[currentIndex]?.LaunchType}</h6>
            <h6> Payload : {launch[currentIndex]?.Payload}</h6>
            <button>
              <a
                href={launch[currentIndex]?.Link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h6>Mission Link</h6>
              </a>
            </button>
            <p>Mission Status : {launch[currentIndex]?.MissionStatus}</p>
          </div>
        )
      )}
    </div>
  );
};

export default ISRO;

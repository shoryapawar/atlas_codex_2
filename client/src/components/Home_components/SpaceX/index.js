import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaWikipediaW, FaReddit } from "react-icons/fa";
import YouTube from "react-youtube";
import "./spacex.scss";

const SpaceX = () => {
  const [spacex, setSpacex] = useState();

  useEffect(() => {
    const fetchSpacexData = async () => {
      try {
        const res = await axios.get(
          "https://api.spacexdata.com/v5/launches/latest"
        );
        setSpacex(res.data);
      } catch (error) {
        console.error("Error in SpaceX API", error);
      }
    };
    fetchSpacexData();
  }, []);

  const opts = {
    height: "300",
    width: "450",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      <h1>SpaceX Latest Launch</h1>
      <div className="spacex-main">
        <div className="upper-section">
          <div className="image-container">
            <img src={spacex?.links?.patch.small} alt="SpaceX" />
          </div>
          <div className="links-container">
            <Link 
              to={spacex?.links?.reddit.launch}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaReddit className="Link" />
            </Link>
            <Link 
              to={spacex?.links?.wikipedia}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWikipediaW className="Link" />
            </Link>
          </div>
        </div>
        <div className="yt">
          <YouTube videoId={spacex?.links?.youtube_id} opts={opts} />
        </div>
      </div>
    </>
  );
};

export default SpaceX;

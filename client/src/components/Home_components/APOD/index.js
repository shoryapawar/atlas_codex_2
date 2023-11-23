import React, { useState, useEffect } from "react";
import axios from "axios";

//css
import "./APOD.css";

const APOD = () => {
  // const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [apiResponse, setApiResponse] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=aZndzgM8ONTa2rwcDrUDdhl19mtNKhWTBMWoaz8g"
      )
      .then((response) => {
        // setImageUrl(response.data.url);
        setApiResponse(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);
  // console.log(imageUrl);

  return (
    <div>
      {/* <Navbar></Navbar> */}

      <div className="apod">
      <div className="title-content">

      </div>
        <h2 style={{ "margin": "30px" }}>Astronomy Picture of the Day</h2>

        {loading ? (
          <p style={{ "margin": "30px" }}>Fetching Data from API...</p>
        ) : (
          <div>
            {apiResponse?.media_type === "video" ? (
              <div>
                <h3>{apiResponse?.title}</h3>
                <h5>{apiResponse?.date}</h5>
                <iframe
                  width="560"
                  height="315"
                  src={apiResponse?.url} // Assuming content contains the YouTube video link
                  title="YouTube Video"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <div>
                <h3>{apiResponse?.title}</h3>
                <h5>{apiResponse?.date}</h5>
                <img src={apiResponse?.url} alt="APOD" />
              </div>
            )}
          </div>
        )}
    
      </div>
    </div>
  );
};

export default APOD;

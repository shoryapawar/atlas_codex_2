import Navbar from "../../components/Navbar/Navbar";
import React, { useState, useEffect } from "react";
import axios from "axios";

//css
import "./home.css"
const Home = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=aZndzgM8ONTa2rwcDrUDdhl19mtNKhWTBMWoaz8g")
      .then((response) => {
        setImageUrl(response.data.url);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });

  }, []);
  console.log(imageUrl);

  return (
    <div>
      <Navbar></Navbar>
  
      <div className="apod">
        <h1>Picture of the Day</h1>
        {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="image-container">

          <img src={imageUrl} alt="apod" />
        </div>
      )}
      </div>
    </div>
  );
};

export default Home;

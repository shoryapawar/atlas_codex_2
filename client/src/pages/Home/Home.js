import React from "react";
import "./Home.scss";
import Scientist from "../../components/Home_components/Scientist/Scientist";
import APOD from "../../pages/APOD";
const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <Scientist />
      </div>
      <div className="box box2">ISS Current Location</div>
      <div className="box box3">box3</div>
      <div className="box box4">NEWS</div>
      <div className="box box5">APOD</div>
      <div className="box box6">box6</div>
      <div className="box box7">box7</div>
      <div className="box box8">box8</div>
      <div className="box box9">events</div>
    </div>
  );
};

export default Home;

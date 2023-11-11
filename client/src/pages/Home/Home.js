import React from "react";
import "./Home.scss";
import Astronaut from "../../components/Home_components/Astronaut/Astronaut";
import APOD from "../../pages/APOD";
import ISS from "../../components/Home_components/ISS/ISS";
import ISS2 from "../../components/Home_components/ISS/ISS-2";
const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <Astronaut />
      </div>
      <div className="box box2">
        <ISS />
      </div>
      <div className="box box3">
        <ISS2/>
      </div>
      <div className="box box4">NEWS</div>
      <div className="box box5">
        <APOD />
      </div>
      <div className="box box6">box6</div>
      <div className="box box7">box7</div>
      <div className="box box8">box8</div>
      <div className="box box9">events</div>
    </div>
  );
};

export default Home;

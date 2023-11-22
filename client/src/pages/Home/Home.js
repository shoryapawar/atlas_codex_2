import React from "react";
import "./Home.scss";
import Astronaut from "../../components/Home_components/Astronaut/Astronaut";
import APOD from "../../pages/APOD";
// import ISS from "../../components/Home_components/ISS/ISS";
import ISS2 from "../../components/Home_components/ISS/ISS-2";
import ISRO from "../../components/Home_components/ISRO";
import Rover from "../../components/Home_components/Rover";
import Tilt from 'react-parallax-tilt';
import { Parallax } from "react-parallax";
const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <Tilt><Astronaut /></Tilt>
        
      </div>
      <div className="box box2">
        <ISRO />
      </div>
      <div className="box box3">
        <ISS2 />
      </div>
      <div className="box box4">
        <Rover></Rover>
      </div>
      <div className="box box5">
        <APOD />
      </div>
      <div className="box box6">box6</div>
      <div className="box box7">box7</div>
      {/* <div className="box box8">box8</div> */}
      {/* <div className="box box9"></div> */}
    </div>
  );
};

export default Home;

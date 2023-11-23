import React from "react";
import "./Home.scss";
import Astronaut from "../../components/Home_components/Astronaut/Astronaut";
import APOD from "../../components/Home_components/APOD"
import ISS2 from "../../components/Home_components/ISS/ISS-2";
import ISRO from "../../components/Home_components/ISRO";
import Rover from "../../components/Home_components/Rover";
import Tilt from "react-parallax-tilt";
import SpaceX from "../../components/Home_components/SpaceX";
import IsroSpaceCraft from "../../components/Home_components/IsroSpaceCrafts";
const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <SpaceX />
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
     <APOD></APOD>
      </div>
      <div className="box box6">
        <Tilt>
          <Astronaut />
        </Tilt>
      </div>
      <div className="box box7"><IsroSpaceCraft/></div>
      {/* <div className="box box8">box8</div> */}
      {/* <div className="box box9"></div> */}
    </div>
  );
};

export default Home;

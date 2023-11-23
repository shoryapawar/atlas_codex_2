import React from 'react'
import "./aboutus.scss"
import Tilt from 'react-parallax-tilt';
import { FaGithub } from "react-icons/fa";
import {Link} from "react-router-dom"
const AboutUS = () => {
  return (
    <div className='about-main'>
      <h1>HeLLo From The Team ❤️</h1>
      <div className='team'>
            <div className='member member1'>
                <Tilt> <img src='images/scientist/1.webp'></img> </Tilt>
                 Shorya Pawar
                 <p>FSD</p>
                 <Link to ={"https://github.com/shoryapawar"}><FaGithub/></Link>
            </div>
            <div className='member member2'>
            <Tilt> <img src='images/scientist/1.webp'></img> </Tilt>
                 Rushali Agarwal
                 <p>FSD</p>
                 <Link to ={"https://github.com/shoryapawar"}><FaGithub/></Link>
            </div>
            <div className='member member3'>
            <Tilt> <img src='images/scientist/1.webp'></img> </Tilt>
                Kajal Kashyap
                 <p>FSD</p>
                 <Link to ={"https://github.com/shoryapawar"}><FaGithub/></Link>
            </div>
       
        
      </div>
    </div>
  )
}
export default AboutUS
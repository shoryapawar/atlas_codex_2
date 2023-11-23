import React from 'react'
import "./aboutus.scss"
import Tilt from 'react-parallax-tilt';
const AboutUS = () => {
  return (
    <div className='about-main'>HeLLo From Team ❤️
      <div className='team'>
            <div className='member member1'>
                <Tilt> <img src='images/scientist/1.webp'></img> </Tilt>
                
                <p>Our solar system has one star, eight planets, five officially recognized dwarf planets, at least 290 moons, more than 1.3 million asteroids, and about 3,900 comets</p>
            </div>
       
        
      </div>
    </div>
  )
}
export default AboutUS
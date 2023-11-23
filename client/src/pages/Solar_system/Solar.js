import React from 'react'
import './Solar.scss';

const Solar = () => {
  return (
    <div className='solar-content'>
        <h1>Solar System Exploration</h1>
        <br></br>
        <div className='solar-system'>
        
        <p>Our solar system has one star, eight planets, five officially recognized dwarf planets, at least 290 moons, more than 1.3 million asteroids, and about 3,900 comets.</p>
        <br/>
        <p>It is located in an outer spiral arm of the Milky Way galaxy called the Orion Arm, or Orion Spur. Our solar system orbits the center of the galaxy at about 515,000 mph (828,000 kph). It takes about 230 million years to complete one orbit around the galactic center.</p>
        <br/>
        <p>We call it the solar system because it is made up of our star, the Sun, and everything bound to it by gravity – the planets Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune; dwarf planets Pluto, Ceres, Makemake, Haumea, and Eris – along with hundreds of moons; and millions of asteroids, comets, and meteoroids.</p>
        <br/>
        <p>Our solar system is the only one we know of that has a planet that supports life. So far, we only know of life on Earth, but we’re looking for life on other worlds.</p>
        </div>
       
        <div className='solar-system-gif'>
         
          <img src='images/Space/solar-system-4.gif'></img>
        </div>

        <div className='sun'>
                <>
                <img className='sun-solar-system' src='images/Space/sun-image.webp'></img>

                </>
                <div className='sun-content'>
                <p>The sun is a huge star present at the centre of the solar system, and all eight planets revolve around the sun. It is a huge ball of fire and gases. It is formed of various types of gases like hydrogen, helium, oxygen, etc. The sun gives us heat and light for the environment and the growth of organisms.
                The sun not only has a much larger radius than Earth—it is also much more massive. The sun’s mass is more than 333,000 times that of Earth, and contains about 99.8 percent of all of the mass in the entire solar system!
     
                </p>
         
                </div>
                </div>
        <div className='solar-cards'>
             
              <div className='solar solar1'>
                <img className='planet-img' src='images/Space/mercury.png'></img>
                <div className='planet-content'>
                  <span className='planet-title'><h3>Mercury</h3></span>       
                <p> Mercury - the smallest planet in our solar system and closest to the Sun- is only slightly larger than Earth's Moon. Mercury is the fastest planet, zipping around the Sun every 88 Earth days. 
           </p>
                </div>
                </div>

                <div className='solar solar2'>
                <img className='planet-img' src='images/Space/venus1.jpg'></img>
                <div className='planet-content'>
                  <span className='planet-title'><h3>Venus</h3></span>
                      
                <p> Venus spins slowly in the opposite direction from most planets. A thick atmosphere traps heat in a runway greenhouse effect, making it the hottest planet in our solar system. </p>
                </div>
                </div>

                <div className='solar solar3'>
                <img className='planet-img' src='images/Space/earthPlanet.png'></img>
                <div className='planet-content'>
                  <span className='planet-title'><h3>Earth</h3></span>
                      
                <p> Earth - home our planet - is the only place w e know of so far that's inhabited by living things. It's also the only planet in our solar syatem with liquid water on the surface.  </p>
                </div>
                </div>

                <div className='solar solar4'>
                <img className='planet-img' src='images/Space/mars.png'></img>
                <div className='planet-content'>
                  <span className='planet-title'><h3>Mars</h3></span>
                      
                <p> Mars is a dusty, cold, desert world with a very thin atmosphere. There is strong evidence Mars was - billions of years ago - wetter and warmer, with a thicker atmosphere. </p>
                </div>
                </div>

                <div className='solar solar5'>
                <img className='planet-img' src='images/Space/jupiter1.webp'></img>
                <div className='planet-content'>
                  <span className='planet-title'><h3>Jupiter</h3></span>
                      
                <p> Jupiter is more than twice as massive than the other planets of our solar syatem combined. The giant planet's Great Red spot is a centuries-old storm bigger than Earth. </p>
                </div>
                </div>

                <div className='solar solar6'>
                <img className='planet-img' src='images/Space/saturn-1.png'></img>
                <div className='planet-content'>
                  <span className='planet-title'><h3>Saturn</h3></span>
                      
                <p> Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system.The other giant planets have rings, but none are as spectacular as Saturn's. </p>
                </div>
                </div>

                <div className='solar solar7'>
                <img className='planet-img' src='images/Space/uranus.png'></img>
                <div className='planet-content'>
                  <span className='planet-title'><h3>Uranus</h3></span>
                      
                <p> Uranus - seventh planet from the Sun - rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side. </p>
                </div>
                </div>

                <div className='solar solar8'>
                <img className='planet-img' src='images/Space/neptune.png'></img>
                <div className='planet-content'>
                  <span className='planet-title'><h3>Neptune</h3></span>
                      
                <p> Neptune - the eighth and most distant major planet orbiting our Sun - is dark, cold and whipped by supersonic winds. It was the first planet located through mathematical calculations. </p>
                </div>
                </div>  

        </div>

        <div className='solar moon'>
                <img className='planet-img' src='images/Space/moon.png'></img>
                <div className='planet-content'>
                  <span className='planet-title'><h3>Moon</h3></span>
                      
                <p> Chances are that when you imagine the night sky, one of the first things that comes to mind is the Moon “glowing” in the darkness. The Moon has always held a special place in our imaginations and in daily life. </p>
                </div>
                </div>
      </div>  
    
  )
}

export default Solar
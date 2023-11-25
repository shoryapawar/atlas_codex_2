// import React from 'react'
// import "./aboutus.scss"
// import Tilt from 'react-parallax-tilt';
// import { FaGithub } from "react-icons/fa";
// import {Link} from "react-router-dom"
// const AboutUS = () => {
//   return (
//     <div className='about-main'>
//       <h1>HeLLo From The Team ❤️</h1>
//       <div className='team'>
//             <div className='member member1'>
//                 <Tilt> <img src='images/scientist/1.webp'></img> </Tilt>
//                  Shorya Pawar
//                  <p>FSD</p>
//                  <Link to ={"https://github.com/shoryapawar"}><FaGithub/></Link>
//             </div>
//             <div className='member member2'>
//             <Tilt> <img src='images/scientist/1.webp'></img> </Tilt>
//                  Rushali Agarwal
//                  <p>FSD</p>
//                  <Link to ={"https://github.com/shoryapawar"}><FaGithub/></Link>
//             </div>
//             <div className='member member3'>
//             <Tilt> <img src='images/scientist/1.webp'></img> </Tilt>
//                 Kajal Kashyap
//                  <p>FSD</p>
//                  <Link to ={"https://github.com/shoryapawar"}><FaGithub/></Link>
//             </div>
       
        
//       </div>
//     </div>
//   )
// }
// export default AboutUS
import React from 'react'
import "./aboutus.scss"
import Tilt from 'react-parallax-tilt';
import { FaGithub } from "react-icons/fa";
import {Link} from "react-router-dom"
const AboutUS = () => {
  return (
    <div className='about-main'>
      <h1>Hello From The Team ❤️</h1>
      <div className='team'>
            <div className='member member1'>
                <Tilt> <img src='images/scientist/shorya.jpeg'></img> </Tilt>
                <div className='memver-content'>
                Hello, I'm Shorya Pawar, a second-year Master of Computer Application student at MNNIT Allahabad.
                
                 {/* <p>FSD</p> */}
                 <Link to ={"https://github.com/shoryapawar"} target='_blank'><FaGithub/></Link>
              </div>
               
            </div>

            <div className='member member2'>
            <Tilt> <img src='images/scientist/rushali.jpeg'></img> </Tilt>
            <div className='memver-content'>
             <p></p>Hello, I'm Rushali Agarwal, a second-year Master of Computer Application student at MNNIT Allahabad.
                 {/* <p>FSD</p> */}
                 <Link to ={"https://github.com/Rushali-Agarwal"} target='_blank'><FaGithub/></Link>
              </div>
            
            </div>

            <div className='member member3'>
            <Tilt> <img src='images/scientist/kajal.jpg'></img> </Tilt>
            <div className='memver-content'>
            <p>Hello, I'm Kajal Kashyap, a second-year Master of Computer Application student at MNNIT Allahabad.</p>
            {/* <p>FSD</p> */}
                 <Link to ={"https://github.com/Kajalkashyap1"} target='_blank'><FaGithub/></Link>
            </div>
                  
            </div>
       
        
      </div>
    </div>
  )
}
export default AboutUS
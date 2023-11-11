import React from 'react'
import Menu from '../Menu/Menu'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
const Layout = () => {
  return (
    <div className='main'>
       <div className='nav'><Navbar/></div>
         
         <div className='content'>
          <div className='menu-content'>
                <Menu/>
            </div>
            <div className='main-content'>
              <Outlet/>
            </div>
         </div>
         
        
       
      </div>
       
   
   
  )
}

export default Layout
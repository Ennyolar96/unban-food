import React from 'react'
import { Link } from 'react-router-dom'
import './navlink.css'



function Navlinks() {
  return (
    <div className='navcontainer'>
      <div className='logo'>
        <h1>Urban Food</h1>
      </div>
        <ul className='navbar'>
          <li> 
           <Link className='navlink' to="/">Home</Link>
          </li>
          <li>
            <Link className='navlink' to="/product">Product</Link>
          </li>
          <li>
           <Link className='navlink' to="/about">About Us</Link>
          </li>
          <li>
           <Link className='navlink' to="/contact">Contact Us</Link>
          </li>
        </ul>
        
       
    </div>
  )
}

export default Navlinks
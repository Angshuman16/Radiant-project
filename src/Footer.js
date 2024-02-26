import React from 'react'
import Dropdown from './Dropdown'

const Footer = () => {
  return (
    <div className='foot'>
     
      <div className='cat'>
   
      <ul id="ul">
        <li id="categories">CATEGORIES</li>
        <li>Web Builder</li>
        <li>Hosting</li>
        <li>Data Center</li>
        <li>Robotic-Automation</li>
      
      </ul>

    
      </div> 

      <div className='cat'>
        <ul id="cat2-ul">
            <li id="categories">CONTACT</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Categories</li>
            <li>About</li>
        </ul>
      </div>

     <Dropdown />

    </div>
  )
}

export default Footer
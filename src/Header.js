import React from 'react'
import './App.css';



const Header = () => {
  return (
    <div className='header'>


      
     
   <div className='inputs-container'>
    <input type="text" className="inputs" placeholder='Search..'>

    
      
    </input>

    <button className='search-button'>Search</button>

    </div>
    
   
    
    <a href="kuchnai" className='texts'>Categories</a>
    <a href="kuchnai" className='texts'>Website Builders</a>
    <a href="kuchnai" className='texts'>Today's Deals</a>

  </div>
  )
}

export default Header
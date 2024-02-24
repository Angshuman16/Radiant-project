import './App.css';
import React from 'react'

const Menu = ({name}) => {
  return (
    <div className='menu-container'>
      <p>{name}</p>
    </div>
  )
}

export default Menu;
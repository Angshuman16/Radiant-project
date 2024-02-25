import React from 'react'
import laptop from "./images/laptop.png";

const Deals = () => {
  return (
    <div className='deal-container'>
        <img  className="pic" src={laptop} alt="display image"></img>
        <div className='benefits-container'>

        <p className='benefits'> 20% Off</p>
        <p className='benefits'>limited time</p>
        </div>
        <h4>Webbuilder1</h4>
        <p>Computer Modern classic with wix support</p>
        
        <div  className='price-container'>
        <p id="thirtynine">$39.9</p>
        <p id="fortysix">$49.6</p>
        <p id="off">(20% Off)</p>
        </div>
        <button className='btn-2'>View Deal</button>
    </div>
  )
}

export default Deals
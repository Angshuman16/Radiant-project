import './App.css';
import laptop from "./images/laptop.png";
import React from 'react'

const Card = ({num,head,desc,highlights,stars,remarks}) => {
  return (
    <div className='cards-container'>
       <p id="num">{num}</p> 
        <div className='piccontainer'>
       <img className='pic' src={laptop} alt="Builder 1"></img>
       <p>Builder{num}</p>
       </div>
      
      <div className='desc-container'>
       <p> <b>{head}</b>{desc}</p>
       <h4>Main highlights</h4>
       <p>{highlights}</p>

       <a href='kuchnai'>Show More</a>
      </div>


       <div className='right-container'>
        <div className='stars'>
          <p>{stars}</p>  
          
          <svg width="66" height="11" className='stars-svg' viewBox="0 0  66 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_601_219)">
<path d="M5.68926 0L3.95021 3.61194L0 4.19479L2.86158 7.04149L2.17754 11L5.68926 9.09502L9.20171 11L8.52271 7.04149L11.3793 4.19479L7.45095 3.61194L5.68926 0Z" fill="#FFB80F"/>
<path d="M19.3445 0L17.6055 3.61194L13.6553 4.19479L16.5168 7.04149L15.8328 11L19.3445 9.09502L22.857 11L22.178 7.04149L25.0346 4.19479L21.1062 3.61194L19.3445 0Z" fill="#FFB80F"/>
<path d="M32.9998 0L31.2608 3.61194L27.3105 4.19479L30.1721 7.04149L29.4881 11L32.9998 9.09502L36.5123 11L35.8333 7.04149L38.6899 4.19479L34.7615 3.61194L32.9998 0Z" fill="#FFB80F"/>
<path d="M46.6546 0L44.9155 3.61194L40.9653 4.19479L43.8269 7.04149L43.1429 11L46.6546 9.09502L50.167 11L49.488 7.04149L52.3446 4.19479L48.4163 3.61194L46.6546 0Z" fill="#FFB80F"/>
<path d="M60.3097 0L58.5709 3.61194L54.6206 4.19479L57.4819 7.04149L56.7982 11L60.3097 9.09502L63.8225 11L63.1431 7.04149L65.9999 4.19479L62.0718 3.61194L60.3097 0Z" fill="#FFB80F"/>
</g>
<defs>
<clipPath id="clip0_601_219">
<rect width="66" height="11" fill="white"/>
</clipPath>
</defs>
          </svg> 

          <h5>{remarks}</h5>

            

            </div>
       <button className='btn'>View</button>
       </div>


    </div>
  )
}

export default Card
import './App.css';
import laptop from "./images/laptop.png";
import React from 'react'

const Card04 = ({num,head,desc,highlight,highlighttext,reason,stars}) => {
  return (
    <div className='cards04-container'>
       <p id="num">{num}</p> 
        <div className='piccontainer'>
       <img className='pic' src={laptop} alt="Builder 1"></img>
       <p>CDK</p>
       </div>
      
      <div className='desc-container'>
       <p id="desc04"> <b>{head}</b>{desc}</p>
       <h4>Main highlights</h4>
       <div className='main-highlights'>
      <ul >

       <li><div>{highlight[0]}-{highlighttext[0]}</div></li>

       <li><div>{highlight[1]}-{highlighttext[1]}</div></li>

       <li><div>{highlight[2]}-{highlighttext[2]}</div></li>

      </ul>
      </div>
        <span>Why we Love it?</span>
      <ul>
          <div className='reasons'>
          <svg width="24" className='reasons-svg' height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 1.25C9.03169 1.25 6.34318 2.45406 4.3986 4.3986C3.40884 5.38837 2.61093 6.57088 2.06597 7.88493C1.38329 9.27784 1 10.8442 1 12.5C1 18.2989 5.70101 23 11.5 23C13.1558 23 14.7222 22.6166 16.1151 21.934C17.4291 21.389 18.6116 20.5912 19.6014 19.6014C21.546 17.6568 22.7501 14.9683 22.7501 12C22.7501 9.03169 21.546 6.34317 19.6014 4.3986C17.6568 2.45406 14.9683 1.25 12 1.25Z" fill="#EBF5FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5303 8.46967C17.8233 8.76257 17.8233 9.23743 17.5303 9.53033L11.5303 15.5303C11.2374 15.8232 10.7626 15.8232 10.4697 15.5303L7.46967 12.5303C7.17678 12.2375 7.17678 11.7626 7.46967 11.4697C7.76256 11.1768 8.23743 11.1768 8.53033 11.4697L11 13.9393L16.4697 8.46967C16.7626 8.17678 17.2374 8.17678 17.5303 8.46967Z" fill="#0855A1"/>
</svg>

            
             <li>{reason[0]}</li>
             </div>

           
             <div className='reasons'>
          <svg width="24" className='reasons-svg' height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 1.25C9.03169 1.25 6.34318 2.45406 4.3986 4.3986C3.40884 5.38837 2.61093 6.57088 2.06597 7.88493C1.38329 9.27784 1 10.8442 1 12.5C1 18.2989 5.70101 23 11.5 23C13.1558 23 14.7222 22.6166 16.1151 21.934C17.4291 21.389 18.6116 20.5912 19.6014 19.6014C21.546 17.6568 22.7501 14.9683 22.7501 12C22.7501 9.03169 21.546 6.34317 19.6014 4.3986C17.6568 2.45406 14.9683 1.25 12 1.25Z" fill="#EBF5FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5303 8.46967C17.8233 8.76257 17.8233 9.23743 17.5303 9.53033L11.5303 15.5303C11.2374 15.8232 10.7626 15.8232 10.4697 15.5303L7.46967 12.5303C7.17678 12.2375 7.17678 11.7626 7.46967 11.4697C7.76256 11.1768 8.23743 11.1768 8.53033 11.4697L11 13.9393L16.4697 8.46967C16.7626 8.17678 17.2374 8.17678 17.5303 8.46967Z" fill="#0855A1"/>
</svg>

            
             <li>{reason[1]}</li>
             </div>
             <div className='reasons'>
          <svg width="24" className='reasons-svg' height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 1.25C9.03169 1.25 6.34318 2.45406 4.3986 4.3986C3.40884 5.38837 2.61093 6.57088 2.06597 7.88493C1.38329 9.27784 1 10.8442 1 12.5C1 18.2989 5.70101 23 11.5 23C13.1558 23 14.7222 22.6166 16.1151 21.934C17.4291 21.389 18.6116 20.5912 19.6014 19.6014C21.546 17.6568 22.7501 14.9683 22.7501 12C22.7501 9.03169 21.546 6.34317 19.6014 4.3986C17.6568 2.45406 14.9683 1.25 12 1.25Z" fill="#EBF5FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5303 8.46967C17.8233 8.76257 17.8233 9.23743 17.5303 9.53033L11.5303 15.5303C11.2374 15.8232 10.7626 15.8232 10.4697 15.5303L7.46967 12.5303C7.17678 12.2375 7.17678 11.7626 7.46967 11.4697C7.76256 11.1768 8.23743 11.1768 8.53033 11.4697L11 13.9393L16.4697 8.46967C16.7626 8.17678 17.2374 8.17678 17.5303 8.46967Z" fill="#0855A1"/>
</svg>

            
             <li>{reason[2]}</li>
             </div>

          </ul>
       <a href="kuchnai">Show More</a>

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

            </div>
       <button className='btn'>View</button>
       </div>


    </div>
  )
}

export default Card04;
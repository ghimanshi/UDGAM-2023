import React from 'react'
import './EventsBuyButton.css'
import ruc from "./../../icons/bpr.svg";
import rc from "./../../icons/bprs.svg";
import { useState } from 'react';


export default function BuyE() {
    const [arrowImage, setarrowImage] = useState(ruc);

  return (
    <div className='body'>
      <a href="/registration">
     <div>
      <div className='back' style={{backgroundColor:'#FC97D9'}}>
      </div>
      <div 
      className='face' 
      onMouseEnter={() => {
        setarrowImage(rc);
      }}
        onMouseLeave={() => {
        setarrowImage(ruc); 
    }}
        style={{backgroundColor:'#D4F34A'}} >
        BUY NOW
        <img src={arrowImage} alt='arrow' />
      </div>
      
    </div>
    </a>
   </div>
  )
}


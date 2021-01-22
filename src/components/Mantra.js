import React from 'react'
import CaptionedSlider from 'react-awesome-slider'
import './style.css'
import Hamburger from './Hamburger'
// import { Router ,Link } from 'react-router-dom'
// import Links from './Links'
import 'react-awesome-slider/dist/styles.css';


const mantras = [
        'Scroll', 
        'Namaste', 
        'Do no harm', 
        'Connect', 
        'Breathe', 
        'Accept', 
        'Relax', 
        'Be present', 
        'Become aware', 
        'Awaken', 
        'Let it go', 
        'Be happy', 
        'Think positivity', 
        'Think gratitude', 
        'Be thankful', 
        'Center your thoughts', 
        'Forward progress', 
        'I am strong', 
        'I am enough', 
        'I am beautiful', 
        'Transcend', 
        'Reflect'
      ];

export default function Mantra({props}) {
 let count = 0;

   const renderedMantra = props.map(mantra => {
       return <div className="hero" key={count} style={{backgroundImage: `url(/img/mantra/${count +=1}.jpg)`}} >
           <h1 className="title">{mantra}</h1>
       </div>
   })
    return (
        <>
       
     <CaptionedSlider 
        bullets={false}
        customContent={<Hamburger />}
        animation="foldOutAnimation" >
        
        {renderedMantra}
     </CaptionedSlider>
     </ >   )
}

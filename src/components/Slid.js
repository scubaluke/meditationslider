import React, { useState } from 'react'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

import './style.css'
import Hamburger from './Hamburger'


export default function Slid({ mantras, imgFolder }) {
    const [autoplay, setAutoplay] = useState(true)

    console.log(mantras);

    let count = 0;
    const renderedFearMantras = mantras.map((mantra) => {
       return <div key={count} style={{backgroundImage: `url(/img/${imgFolder}/${count +=1}.jpg)`}} >
         <h1 className="title">{mantra}</h1>
           </div>
    })

    const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
        <>
        <Hamburger />
        <img 
            onClick={() => setAutoplay(!autoplay)}
            className="autoplay-icon" src={autoplay ? '/img/autoplay/pause-solid.svg' : '/img/autoplay/play-solid.svg'} alt=""/>
        <AutoplaySlider animation="cubeAnimation" 
            cancelOnInteraction={true} 
            play={autoplay}
            interval={5000}
        >
            {renderedFearMantras}
        </AutoplaySlider>
        </>
    )
}

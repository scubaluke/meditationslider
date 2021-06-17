import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

import './style.css'
import Hamburger from './Hamburger'


export default function Slide({ animation, mantras, imgFolder, play }) {
console.log(imgFolder);

    let count = 0;
    const renderedMantras = mantras.map((mantra) => {
       return <div 
                    className="awssld__wrapper" 
                    key={count} 
                    style={{backgroundImage: `url(/img/${imgFolder}/${count +=1}.jpg)`}} 
                >

                <h1 className={`title ${mantra.display}`}>
                    {mantra.title}
                </h1>
                <h2>{mantra.secondTitle}</h2>
           </div>
    })


    const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
        <>
        <AutoplaySlider 
            timerBackgroundColor='#0084ff'
            // showTimer={true}
            customContent={ <Hamburger /> }
            animation={animation}
            cancelOnInteraction={true} 
            play={true}
            interval={6000}
        >
            {renderedMantras}
        </AutoplaySlider>
        </>
    )
}

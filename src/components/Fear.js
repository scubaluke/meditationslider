import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

import './style.css'
import Hamburger from './Hamburger'


const fearsMantras = [
    'Other people feel this too.',
    'This too shall pass.',
    'One day at a time',
    `I let go of what I can't change.`,
    'I feel my fear slipping away.',
    'Today, I am not afraid.',
    'My fear is not real.',
    'My fear is simply imagined.',
    'When I am fully present, my fear goes away.',
    'Everything will be ok.',
    `No more "what if's"`,
    'Feel the movement of your breath.',
    `don't over think this.`,
    'I am calm',
    'Everything happens for a reason.',
    'The way I am feeling is ok.',
    'Things are not being done to me, they are simply happening',
    'I will get better.',
    'I will be ok.',
    'There is no danger.',
    'Time heals all wounds.',
    'I am present.',
    'I am not my fears',
    'Fears are manifestations of the mind',
    'I accept the things I cannot change.'
]


export default function Fear() {
    let count = 1;
    const renderedFearMantras = fearsMantras.map((mantra) => {
       return <div key={count} style={{backgroundImage: `url(/img/fear/${count +=1}.jpg)`}} >
         <h1 className="title">{mantra}</h1>
           </div>
    })

    const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
        <>
        <Hamburger />
        <AutoplaySlider animation="cubeAnimation" 
            cancelOnInteraction={true} // should stop playing on user interaction

            play={true}
            interval={5000}
        >
            {renderedFearMantras}
        </AutoplaySlider>
        </>
    )
}

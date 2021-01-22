import React from 'react'
import AwesomeSlider from 'react-awesome-slider'
import './style.css'
import Hamburger from './Hamburger'

const woaMantras = [
    'I am surrounded with beauty and abundance',
    'I am devoted to my soul’s purpose and passion',
    'Good things are going to happen',
    'I radiate positive energy',
    'I am living my full potential',
    'Gratitude turns what we have  into enough',
    'The more you are thankful the more you attract things to be thankful for',
    'Calm  is my superpower',
    'I have the courage to make this a great day',
    'I am amazing',
    'I can do anything',
    'Positivity is a choice',
    'I celebrate my individuality',
    'I am prepared to succeed',
    'Quiet the mind and the sole will speak',
    'The divine is in all things',
    'Be YOU tiful',
    'Gratitude opens your heart to love',
    'I am grateful for every blessing the universe has and will ever create for me',
    'The real gift of gratitude is that the more grateful you are, the more present you become',
    'If you wouldn’t say it to a friend don’t say it to yourself',
    'The soul develops by giving, not by accumulating',
    'Don’t believe everything you think',
    'We don’t see things the way they are, we see things the way we are',
    'I am worthy of my dreams',
    'Train your mind to see something good in everything',
    'I am patient and calm and greet the day with ease',
    'I trust in divine timing, the universe always has my back',
    'I am in the process of becoming the best version of myself',
    'I give up freely what is no longer serving me, I release it to create space for what inspires me',
    'I am loved, loving and lovable',
    'I am perfect exactly how I am',
    'I never give up',
    'I trust my journey and I will always find my way',
];

export default function Woa() {
    let count = 0;
    const renderedWoaMantras = woaMantras.map(mantra => {
        return <div style={{backgroundImage: `url(/img/WOA/${count +=1}.jpg)`}}  >
            <h1 className="title">{mantra}</h1>
        </div>
    })
    return (
        <>
        <Hamburger />
        <AwesomeSlider animation="openAnimation" >
            {renderedWoaMantras}
        </AwesomeSlider>
        </>
    )
}

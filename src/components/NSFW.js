import React from 'react'
import AwesomeSlider from 'react-awesome-slider'
import './style.css'
import Hamburger from './Hamburger'


const NSFWMantras = [
    'Breath in serenity breath out bull shit',
  
    'Let go of all the fucking bullshit',
  
    'With each breath feel your body saying "fuck it"',
  
    'In passing acceptance allow thought to pass by',
  
    'Don’t allow your thoughts to wander, all that shit is bull shit',
  
    'Find your inner peace, even the biggest turd burglars can’t take that away from you',
  
    'Let all that shit go',
  
    'Allow yourself to be in this beautiful fucking moment',
  
    'Feel your mind become calm AF',
  
    'Know that right now you are exactly where your supposed to be',
  
    'Allow every idiotic butthammer who did you wrong to fade from existence ',
  
    'Remember your unique spirit brings shit tons of light to the world',
  
    'Do no harm (take no shit)',
  
    'Fuck it',
  
    'Drift the fuck out of your consciousness',
  
    'Fade into the land of zero fucks given',
  
    'Expect bullshit, never accept it',
  
    'What the fuck was I thinking about? oh yeah, emptiness',
  
    'Allow yourself to be relaxed AF',
  
    'Feel the fucking insanity fade away',
  
    'If you feel your thoughts become driven by the monkey in your brain, focus again on your breathing',
  
    'Let passing thoughts drift by, like after some real good weed',
  
    'Be present, remove yourself from all the "what the actual fuck" moments of your day',
  
    'Become free from all the shart blossoms of the world',
  
    'Never accept anything less then you deserve',
  
    'Shit could be worse',
  
    'Appreciate this moment, forget all the lying dog faced pony soldiers',
  ];

export default function NSFW() {
    let count = 0
    const renderedNSFWMantras = NSFWMantras.map(mantra => {
        return <div style={{backgroundImage: `url(img/NSFW/${count += 1}.jpg)`}} >
            <h1 className="title">{mantra}</h1>
        </div>
    })
    return (
        <>
       <Hamburger />
        <AwesomeSlider animation="foldOutAnimation">
            {renderedNSFWMantras}
        </AwesomeSlider>
        </>
    )
}

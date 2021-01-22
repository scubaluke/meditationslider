import React from 'react'
import 'react-awesome-slider/dist/styles.css'
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css';
import 'react-awesome-slider/dist/custom-animations/open-animation.css';
import { BrowserRouter, Route, } from 'react-router-dom'
import { mantras, fearsMantras, NSFWMantras, woaMantras } from './components/data'
import Slide from './components/Slid'

// import './App.css';
// import Fear from './components/Fear'
// import NSFW from './components/NSFW'
// import Woa from './components/Woa'
// import Mantra from './components/Mantra'
// import Hamburger from './components/Hamburger'


// import Links from './components/Links.js'


function App() {

  return (
    <>   
    <BrowserRouter>
      <Route path="/" exact >
        <Slide  
          mantras={mantras.mantra} 
          imgFolder={mantras.imgFolder}
          />
        </Route>
      <Route path="/nsfw" >
      <Slide  
          mantras={NSFWMantras.mantra}
          imgFolder={NSFWMantras.imgFolder}
          />
      </Route>
      <Route path="/woa" >
        <Slide  
           mantras={woaMantras.mantra}
           imgFolder={woaMantras.imgFolder}
           />
      </Route>
      <Route path="/fear" >
        <Slide  
            mantras={fearsMantras.mantra}
            imgFolder={fearsMantras.imgFolder}
            />
      </Route>
    </BrowserRouter>
    </> 
  );
}

export default App;

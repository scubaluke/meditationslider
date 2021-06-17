import React from 'react'
import 'react-awesome-slider/dist/styles.css'
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css';
import 'react-awesome-slider/dist/custom-animations/open-animation.css';
import { HashRouter, Route, } from 'react-router-dom'
import { mantras, fearsMantras, NSFWMantras, woaMantras } from './components/data'
import Slide from './components/Slide'

function App() {
  return (
    <>   
    <HashRouter>
      <Route path="/" exact >
        <Slide  
          animation="cubeAnimation"
          mantras={mantras.mantra} 
          imgFolder={mantras.imgFolder}
          />
        </Route>
      <Route path="/nsfw" >
      <Slide 
          animation="openAnimation"
          mantras={NSFWMantras.mantra}
          imgFolder={NSFWMantras.imgFolder}
          />
      </Route>
      <Route path="/woa" >
        <Slide  
          animation="foldOutAnimation"
           mantras={woaMantras.mantra}
           imgFolder={woaMantras.imgFolder}
           />
      </Route>
      <Route path="/fear" >
        <Slide  
            animation="cubeAnimation"
            mantras={fearsMantras.mantra}
            imgFolder={fearsMantras.imgFolder}
            />
      </Route>
    </HashRouter>
    </> 
  );
}

export default App;

import React, { useState } from 'react'
import 'react-awesome-slider/dist/styles.css'
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css';
import 'react-awesome-slider/dist/custom-animations/open-animation.css';
import { BrowserRouter, Route, } from 'react-router-dom'
import { mantras, fearsMantras, NSFWMantras, woaMantras } from './components/data'
import Slide from './components/Slid'

function App() {

  const [autoplay, setAutoplay] = useState(true)

  // onClick={() => setAutoplay(!autoplay)}
 const isAutoPlay = () => {
    return setAutoplay(!autoplay)
  }

  return (
    <>   
    <BrowserRouter>
      <Route path="/" exact >
        <Slide  
          animation="cubeAnimation"
          mantras={mantras.mantra} 
          imgFolder={mantras.imgFolder}
          play={autoplay}
          autoplay={isAutoPlay}
          />
        </Route>
      <Route path="/nsfw" >
      <Slide 
          animation="openAnimation"
          mantras={NSFWMantras.mantra}
          imgFolder={NSFWMantras.imgFolder}
          play={autoplay}
          autoplay={isAutoPlay}
          />
      </Route>
      <Route path="/woa" >
        <Slide  
          animation="foldOutAnimation"
           mantras={woaMantras.mantra}
           imgFolder={woaMantras.imgFolder}
           play={autoplay}
          autoplay={isAutoPlay}
           />
      </Route>
      <Route path="/fear" >
        <Slide  
            animation="cubeAnimation"
            mantras={fearsMantras.mantra}
            imgFolder={fearsMantras.imgFolder}
            play={autoplay}
            autoplay={isAutoPlay}
            />
      </Route>
    </BrowserRouter>
    </> 
  );
}

export default App;

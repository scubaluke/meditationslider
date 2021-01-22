import React from 'react'
import 'react-awesome-slider/dist/styles.css'
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css';
import 'react-awesome-slider/dist/custom-animations/open-animation.css';
import { BrowserRouter, Route, } from 'react-router-dom'


// import './App.css';
import Fear from './components/Fear'
import NSFW from './components/NSFW'
import Woa from './components/Woa'
import Mantra from './components/Mantra'
// import Hamburger from './components/Hamburger'


// import Links from './components/Links.js'


function App() {

  return (
   
 <>   
<BrowserRouter>
   <Route path="/" exact component={Mantra} ></Route>
   <Route path="/nsfw" component={NSFW} ></Route>
   <Route path="/woa" component={Woa} ></Route>
  <Route path="/fear" component={Fear} ></Route>
</BrowserRouter>
</> 
  


 
  


  );
}

export default App;

import Header from './components/Header'
import MainTitle from './components/MainTitle';
import Problems from './components/Problems';

import './App.css'
import { useState } from 'react';

function App() {

  document.body.addEventListener("pointermove", (e)=>{
    const { currentTarget: el, clientX: x, clientY: y } = e;
    const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
    el.style.setProperty('--posX',  x-l-w/2);
    el.style.setProperty('--posY',  y-t-h/2);
  })

  return (
    <div className="App">
     <Header />
     <MainTitle />
     <Problems />
    </div>
  )
}

export default App

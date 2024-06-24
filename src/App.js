// App.js

import React from 'react';
import './App.css';
import NavBar from './component/NavBar'; // Importez votre composant NavBar
import ParticlesBackground from './component/ParticlesBackground'; // Importez votre composant ParticlesBackground
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TexteDeroulant from './component/textDeroulant';
import MouseIcon from './component/MouseIcon';
// import Presentation from './component/Presentation';
// import Footer from './component/footer';

function App() {
  return (
    <div>
      <header>
        <ParticlesBackground />
        <NavBar />
        <div className='img'>
          <h1>   <TexteDeroulant /></h1>
        </div>
        <a href="#presentation">
         <MouseIcon/>
        </a>
      </header>
    </div>
  );
}


export default App;

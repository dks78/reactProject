// components/ParticlesBackground.js

import React, { useState } from 'react';
import ParticlesBg from 'particles-bg';

const ParticlesBackground = () => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };
  const config = {
    num: isMouseOver ? 100 : 250, // Nombre de particules
    type: 'cobweb', // Type de particules
    bg: true, // Arrière-plan des particules
    color: '#ff0000', // Couleur des particules (exemple: rouge)
    // Ajoutez d'autres paramètres comme nécessaire
  };
  return (
    <div
      className="particles-container" // Appliquer la classe CSS au conteneur des particules
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ParticlesBg  type="cobweb" bg={true} num={isMouseOver ? 100 : 250} />
      {/* Utilisez isMouseOver pour ajuster num selon l'état du survol */}
    </div>
  );
}

export default ParticlesBackground;

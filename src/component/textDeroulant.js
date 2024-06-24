import React, { useState, useEffect } from 'react';

const TexteDeroulant = () => {
  const autreTexte = "Bonjour , je me présente Aurélien Mestry ";
  const [autreIndex, setAutreIndex] = useState(0);
  const [autreDirection, setAutreDirection] = useState(1);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayText(autreTexte.substring(0, autreIndex));

      if (autreDirection === 1) {
        setAutreIndex(prevIndex => prevIndex + 1);

        if (autreIndex === autreTexte.length) {
          setAutreDirection(-1);
          setTimeout(() => {}, 2000); // Pause avant de masquer
        }
      } else {
        setAutreIndex(prevIndex => prevIndex - 1);

        if (autreIndex === 0) {
          setAutreDirection(1);
          setTimeout(() => {}, 1000); // Pause avant de réafficher
        }
      }
    }, 80); // Temporisation entre les lettres

    return () => clearInterval(interval);
  }, [autreIndex, autreDirection, autreTexte]);

  return (
    <div id="autreTextContainer">
      {displayText}
    </div>
  );
};

export default TexteDeroulant;

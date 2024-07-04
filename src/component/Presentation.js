import React, { useState, useEffect } from 'react';
import '../App.css'; // Assurez-vous que le chemin est correct
import MouseIcon2 from './MouseIcone2';


const Presentation = () => {
  useEffect(() => {
    const handleScrollAnimations = () => {
      document.querySelectorAll('.scroll-animate2').forEach(function (element) {
        if (isElementInViewport(element)) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }
      });
    };

    const isElementInViewport = (el) => {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    window.addEventListener('scroll', handleScrollAnimations);
    document.addEventListener('DOMContentLoaded', handleScrollAnimations);

    return () => {
      window.removeEventListener('scroll', handleScrollAnimations);
      document.removeEventListener('DOMContentLoaded', handleScrollAnimations);
    };
  }, []);

  return (
    <section id="presentation" className="py-5 text-center container">
        <div className="module-header  ">
            <h2 className="module-title scroll-animate2">Presentation
                <span>Qui suis-je ?</span>
            </h2>
        </div>
      <div className="row text-center">
        <div className="me col-lg-6 mx-auto">
          <p className="text-body-secondary PresentationClasse scroll-animate2">
            Je suis un jeune développeur en formation, qui se forme en React, JS, Node.js, Python. J'ai commencé ma formation l'année dernière. 
            Passionné par Jésus-Christ, je compte bien réussir dans la vie que Dieu a pour moi. Le développement web est le métier que Dieu m'a 
            donné pour avancer dans ma vie professionnelle.
          </p>
        </div>
        <div>
            <a href='#competence'>
            <MouseIcon2 />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Presentation;

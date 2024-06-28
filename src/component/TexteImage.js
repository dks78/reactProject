import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const TexteImage = () => {
  const [pourcentage, setPourcentage] = useState(0);
  const progressBarRef = useRef(null);
  const progressBarHtmlRef = useRef(null);
  const progressBarCssRef = useRef(null);

  useEffect(() => {
    const progressBar = progressBarRef.current;
    if (progressBar) {
      progressBar.style.width = pourcentage + "%";
      progressBar.setAttribute("aria-valuenow", pourcentage);
      progressBar.textContent = `JavaScript ${pourcentage}%`;
    }
  }, [pourcentage]);

  useEffect(() => {
    setPourcentage(50);
  }, []);

  const [pourcentageHtml, setPourcentageHtml] = useState(0);

  useEffect(() => {
    const progressBarHtml = progressBarHtmlRef.current;
    if (progressBarHtml) {
      progressBarHtml.style.width = pourcentageHtml + "%";
      progressBarHtml.setAttribute("aria-valuenow", pourcentageHtml);
      progressBarHtml.textContent = `HTML ${pourcentageHtml}%`;
    }
  }, [pourcentageHtml]);

  useEffect(() => {
    setPourcentageHtml(80);
  }, []);

  const [pourcentageCss, setPourcentageCss] = useState(0);

  useEffect(() => {
    const progressBarCss = progressBarCssRef.current;
    if (progressBarCss) {
      progressBarCss.style.width = pourcentageCss + "%";
      progressBarCss.setAttribute("aria-valuenow", pourcentageCss);
      progressBarCss.textContent = `CSS ${pourcentageCss}%`;
    }
  }, [pourcentageCss]);

  useEffect(() => {
    setPourcentageCss(75);
  },
  
  []);
  useEffect(() => {
    const handleScrollAnimations = () => {
      document.querySelectorAll('.scroll-animate').forEach(function (element) {
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
    <section id="texte-image" className="py-5 text-center container">
      <div className="module-header">
        <h2 className="module-title scroll-animate2">
          Mes Compétences
          <span>Mon parcours</span>
        </h2>
      </div>
      <div className="row text-center">
        <div className="col-lg-6 col-md-8 mx-auto scroll-animate">
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner h-100">
              <div className="carousel-item active">
                <img className="d-block w-100 " src="/HTMLCSS.jpg" alt="First slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100  " src="/Js.jpg" alt="Second slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100 " src="/react.jpg" alt="Third slide" />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-md-8 mx-auto">
          <p className="text-body-secondary scroll-animate2">
            Voici votre texte descriptif à côté de l'image.
            <ul>
              <li className="progresseBarUl">
                <div className="progress mb-4 scroll-animate2">
                  <div id="progressBar" ref={progressBarRef} className="progress-bar scroll-animate" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className="progress mb-4 scroll-animate2">
                  <div id="progressBarHtml" ref={progressBarHtmlRef} className="progress-bar scroll-animate" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className="progress mb-4 scroll-animate2">
                  <div id="progressBarCSS" ref={progressBarCssRef} className="progress-bar scroll-animate" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </li>
            </ul>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TexteImage;

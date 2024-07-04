import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import MouseIcon2 from './MouseIcone2';

const TexteImage = () => {
  const [pourcentage, setPourcentage] = useState(0);
  const progressBarRef = useRef(null);
  const progressBarHtmlRef = useRef(null);
  const progressBarCssRef = useRef(null);
  const progressBarReactRef = useRef(null);
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

  const [pourcentageReact, setPourcentageReact] = useState(0);
  useEffect(() => {
    const progressBarReact = progressBarReactRef.current;
    if (progressBarReact) {
      progressBarReact.style.width = pourcentageReact + "%";
      progressBarReact.setAttribute("aria-valuenow", pourcentageReact);
      progressBarReact.textContent = `React ${pourcentageReact}%`;
    }
  }, [pourcentageReact]);
  useEffect(() => {
    setPourcentageReact(40);
  }, []);



  useEffect(() => {
    const handleScrollAnimations = () => {
      document.querySelectorAll('.scroll-animateCarroussel').forEach(function (element) {
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

  useEffect(() => {
    const handleScrollAnimations = () => {
      document.querySelectorAll('.scroll-animateCompétence').forEach(function (element) {
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
    <section id="texte-image" className="py-5 text-center ">
      <div className='container carousselprogresse'>
        <div className="module-header">
          <div id='competence'></div>
          <h2 className="module-title scroll-animateCompétence">
            Mes Compétences
            <span>Mon parcours</span>
          </h2>
        </div>
        <div className="row text-center ">
          <div className="col-lg-6 col-md-8 mx-auto scroll-animateCarroussel">
            <div id="carouselExampleControls" className="carousel slide carousel-fade  " data-bs-ride="carousel">
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
            <p className=" PresentationCompetence text-body-secondary scroll-animate2">
              je vous présente mes compétence acquise depuis le debut de ma formation
            </p>
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
                <div className="progress mb-4 scroll-animate2">
                  <div id="progressBarReact" ref={progressBarReactRef} className="progress-bar scroll-animate" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <a href='#'>
        <div id='iconeTexteImg'>
          <MouseIcon2 />
        </div>
      </a>
      <section className=''>
        <div className='realisation'>
          <h2 className="module-title scroll-animateCompétence">
            Mes Réalisation
            <span>Mon parcours</span>
          </h2>
        </div>
        <div class="projet2 flex-container">
          <section class="moi">
            <div class="image">
              <img src="/js.jpg" alt="loup" />
              <div class="content text-body-secondary">
                <h4>HTML CSS</h4>
                <p>mon but et de creé un site reconnue a l'international</p>
              </div>
            </div>
          </section>
          <section class="moi">
            <div class="image text-body-secondary">
              <img src="/react.jpg" alt="loup" />
              <div class="content">
                <h4>l'évangile</h4>
                <p>l'évangile dois etre repandu !</p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </section>
  );
};

export default TexteImage;

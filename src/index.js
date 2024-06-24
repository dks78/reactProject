import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './footer';
import Presentation from './component/Presentation';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const basPage = ReactDOM.createRoot(document.getElementById('basPage'));

basPage.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);

const MainPresentation = ReactDOM.createRoot(document.getElementById('MainPresentation'));

  MainPresentation.render(
    <React.StrictMode>
      <Presentation />
    </React.StrictMode>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

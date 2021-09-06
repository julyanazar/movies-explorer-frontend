import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AboutMe from './components/AboutMe/AboutMe';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AboutMe />
      <Portfolio />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
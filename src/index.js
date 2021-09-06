import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AboutMe from './components/AboutMe/AboutMe';
import Portfolio from './components/Portfolio/Portfolio';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AboutMe />
      <Portfolio />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
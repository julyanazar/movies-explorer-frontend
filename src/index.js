import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AboutMe from './components/AboutMe/AboutMe';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AboutMe />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
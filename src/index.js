import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AboutProject from './components/AboutProject/AboutProject';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AboutProject />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
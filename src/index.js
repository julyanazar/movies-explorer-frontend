import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header/Header';
import Promo from './components/Promo/Promo';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Promo />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
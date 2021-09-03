import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Techs from './components/Techs/Techs';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Techs />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
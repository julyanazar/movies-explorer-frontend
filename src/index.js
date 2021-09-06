import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavigationAuth from './components/NavigationAuth/NavigationAuth';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavigationAuth />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
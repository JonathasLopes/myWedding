import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/Pallete.css';
import './assets/Global.css';
import './assets/@media.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

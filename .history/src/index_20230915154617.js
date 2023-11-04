import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
//import store from './state/stores/store';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* css */

import 'bootstrap/dist/css/bootstrap.min.css'
import './css/main.scss'
import './css/play-room.scss'


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

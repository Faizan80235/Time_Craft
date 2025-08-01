import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // For toggler functionality
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Provider} from "react-redux"
import reportWebVitals from './reportWebVitals';
import store from './Redux/Store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
      <App />
    </Provider>

  

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

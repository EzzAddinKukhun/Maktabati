import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'; 
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css"
import { BrowserRouter } from 'react-router-dom';
import Home from '../src/component/HomePage/Home'; 
import '../node_modules/wowjs/css/libs/animate.css';
import Search from './component/SearchPage/Search';
import App from '../src/App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

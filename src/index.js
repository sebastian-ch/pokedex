import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Sidebar from './Sidebar'
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <Sidebar />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



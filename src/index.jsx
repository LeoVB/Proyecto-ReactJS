// React imports
import React from 'react';
import ReactDOM from 'react-dom';

// Redux imports
// import { Provider } from 'react-redux';

import App from './components/App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/css/index.scss';

// TODO: If we work with redux, we create the store and apply middleware here


import { createRoot } from "react-dom/client";

// ...

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root'),
// );

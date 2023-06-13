// React imports
import React from 'react';
import ReactDOM from 'react-dom';

// Redux imports
// import { Provider } from 'react-redux';

import App from './components/App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/css/index.scss';

// TODO: If we work with redux, we create the store and apply middleware here

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

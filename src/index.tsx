import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { AppRouter } from './routes/AppRouter';
import { GlobalStyles } from './styles/style.global';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

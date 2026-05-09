import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Title, Paragrafo } from './pages/styled'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

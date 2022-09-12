import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { getapi } from './services/getapi'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApiProvider api={getapi}>
      <App />
    </ApiProvider>
  </React.StrictMode>
);
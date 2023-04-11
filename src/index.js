import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MetricsProvider } from '@cabify/prom-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MetricsProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </MetricsProvider>
);


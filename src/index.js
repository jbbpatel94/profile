import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/* Register a service worker */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js', { scope: '/' })
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

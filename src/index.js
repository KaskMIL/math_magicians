import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const domRoot = document.getElementById('root');
const root = createRoot(domRoot);

root.render(
  <Router>
    <App />
  </Router>,
);

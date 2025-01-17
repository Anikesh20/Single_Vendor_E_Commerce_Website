import React from 'react';
import ReactDOM from 'react-dom/client'; // Use createRoot from ReactDOM
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css'; // Ensure your CSS file is in the correct location

// Use ReactDOM.createRoot for React 18+
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { DarkModeProvider } from './context/DarkModeContext.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <DarkModeProvider>
    <App />
  </DarkModeProvider>
);

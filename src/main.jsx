import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/Login.jsx'; // Confirme se o caminho/nome do arquivo batem
import './index.css'; // Onde seu Tailwind está importado

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);
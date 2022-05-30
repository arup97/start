import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthenticationContextProvider } from './authentication.context';
import "./Styles/Index.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthenticationContextProvider>

        <App />
      </AuthenticationContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);


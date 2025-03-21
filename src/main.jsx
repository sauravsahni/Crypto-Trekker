import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom' // for routing
import CoinContextProvider from './context/CoinContext.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <CoinContextProvider>
        <App />
      </CoinContextProvider>
    </HashRouter>
  </StrictMode>
);

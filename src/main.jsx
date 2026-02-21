import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import "./i18n"  // link with i18n
import { HelmetProvider } from 'react-helmet-async'
import {store} from './store/store.js'
import { Provider } from 'react-redux'
createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <BrowserRouter>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </BrowserRouter>
  </Provider>

)

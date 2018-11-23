// ==============================
// DEPENDENCIES
// ==============================
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

// ==============================
// COMPONENTS
// ==============================
import App from './App'

// ==============================
// STYLES
// ==============================
import './index.css'

// ==============================
// RENDER
// ==============================
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, 
  document.getElementById('root')
)

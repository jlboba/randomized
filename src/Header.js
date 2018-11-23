// ==============================
// DEPENDENCIES
// ==============================
import React from 'react'
import { Link } from 'react-router-dom'

// ==============================
// HEADER COMPONENT
// ==============================
const Header = ({ currentCohort }) => {
  return (
    <header>
      <div className="header-container">
        <div className="header-title"><Link to='/'>RANDOMIZED { currentCohort }</Link></div>
        <div className="header-navigation">
          <ul>
            <li><a href="/">Link</a></li>
            <li><a href="/">link</a></li>
            <li><a href="/">link</a></li>
            <li><a href="/">link</a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

// ==============================
// EXPORT
// ==============================
export default Header

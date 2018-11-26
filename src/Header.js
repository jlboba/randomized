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
            <li><Link to='/'>SEE ALL COHORTS</Link></li>
            <li><Link to='/new/cohort'>ADD A COHORT</Link></li>
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

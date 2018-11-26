// ==============================
// DEPENDENCIES
// ==============================
import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

// ==============================
// HEADER COMPONENT
// ==============================
class Header extends Component {
  // STATE
  state = {
    allActive: true,
    addActive: false
  }

  // RENDER
  render() {
    const { currentCohort } = this.props
    return (
      <header>
        <div className="header-container">
          <div className="header-title"><Link to='/'>RANDOMIZED { currentCohort }</Link></div>
          <div className="header-navigation">
            <ul>
              <li><NavLink exact to='/' activeClassName="active-header-link">SEE ALL COHORTS</NavLink></li>
              <li><NavLink to='/new/cohort'  activeClassName="active-header-link">ADD A COHORT</NavLink></li>
            </ul>
          </div>
        </div>
      </header>
    )
  }
}

// ==============================
// EXPORT
// ==============================
export default Header

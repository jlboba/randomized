// ==============================
// DEPENDENCIES
// ==============================
import React, { Component } from 'react'

// ==============================
// LISTS COMPONENT
// ==============================
class Lists extends Component {
  // LIFE CYCLES
  componentDidMount() {
    this.props.getCohort()
  }
  
  // RENDER
  render() {
    return (
      <div>
        lists will go here
      </div>
    )
  }
}

// ==============================
// EXPORT
// ==============================
export default Lists

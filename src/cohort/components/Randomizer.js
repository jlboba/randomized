// ==============================
// DEPENDENCIES
// ==============================
import React, { Component } from 'react'

// ==============================
// RANDOMIZER COMPONENT
// ==============================
class Randomizer extends Component {
  // LIFE CYCLES
  componentDidMount() {
    this.props.getCohort(true)
    this.props.handleActiveSpace('randomizer')
  }

  // RENDER
  render() {
    return (
      <div>
        <div className="randomizer-buttons-container">
          <button className="randomizer-button">pairs</button>
          <button className="randomizer-button">threes</button>
          <button className="randomizer-button">fours</button>
        </div>
      </div>
    )
  }
}

// ==============================
// EXPORT
// ==============================
export default Randomizer

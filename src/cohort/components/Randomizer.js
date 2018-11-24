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
    this.props.getCohort()
  }

  // RENDER
  render() {
    return (
      <div>
        randomizer will go here
      </div>
    )
  }
}

// ==============================
// EXPORT
// ==============================
export default Randomizer

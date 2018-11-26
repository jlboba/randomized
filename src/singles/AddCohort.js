// ==============================
// DEPENDENCIES
// ==============================
import React, { Component } from 'react'
import axios from 'axios'

// ==============================
// ADD COHORT COMPONENT
// ==============================
class AddCohort extends Component {
  // HANDLER METHODS
  handleSubmit = (e) => {
    e.preventDefault()
    axios.post('https://randomized-api.herokuapp.com/cohorts', {
      name: this.refs.cohortName.value,
    })
      .then((createdCohort) => {
        this.props.history.push('/')
      })
      .catch(err => console.log(err))
  }

  // LIFE CYCLES
  componentDidMount() {
    this.props.handleCurrentCohort('')
  }

  // RENDER
  render() {
    return (
      <div className="add-cohort-container">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="cohortName" />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

// ==============================
// EXPORT
// ==============================
export default AddCohort

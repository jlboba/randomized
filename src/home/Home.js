// ==============================
// DEPENDENCIES
// ==============================
import React, { Component } from 'react'

// ==============================
// IMPORTED COMPONENTS
// ==============================
import CohortCard from './components/CohortCard'

// ==============================
// HOME COMPONENT
// ==============================
class Home extends Component {
  // LIFE CYCLES
  componentDidMount() {
    this.props.handleCurrentCohort('')
    this.props.getCohorts()
  }

  // RENDER
  render() {
    const { cohorts, handleCurrentCohort } = this.props
    return (
      <div className="cohorts-container">
        {cohorts.map((cohort, index) =>
          <CohortCard
            id={cohort.cohort_id}
            name={cohort.cohort_name}
            students={cohort.students}
            handleCurrentCohort={handleCurrentCohort}
            key={index}
          />
        )}
      </div>
    )
  }
}

// ==============================
// EXPORT
// ==============================
export default Home

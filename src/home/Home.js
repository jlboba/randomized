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
  render() {
    const { cohorts } = this.props
    return (
      <div className="cohorts-container">
        {cohorts.map((cohort, index) =>
          <CohortCard
            id={cohort.cohort_id}
            name={cohort.cohort_name}
            students={cohort.students}
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

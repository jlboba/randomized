// ==============================
// DEPENDENCIES
// ==============================
import React from 'react'

// ==============================
// IMPORTED COMPONENTS
// ==============================
import CohortCard from './components/CohortCard'

// ==============================
// HOME COMPONENT
// ==============================
const Home = ({ cohorts }) => {
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

// ==============================
// EXPORT
// ==============================
export default Home

// ==============================
// DEPENDENCIES
// ==============================
import React from 'react'

// ==============================
// HEADER COMPONENT
// ==============================
const CohortCard = ({ id, name, students }) => {
  return (
    <div className="cohort-card">
      <h1>{name}</h1>
      <div className="cohort-student-count">{students.length} students</div>
    </div>
  )
}

// ==============================
// EXPORT
// ==============================
export default CohortCard

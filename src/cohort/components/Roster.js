// ==============================
// DEPENDENCIES
// ==============================
import React from 'react'

// ==============================
// ROSTER COMPONENT
// ==============================
const Roster = ({ students }) => {
  return (
    <div className="roster-container">
      <h1>ROSTER</h1>
      <h2>{students.length} STUDENTS</h2>
      <div className="students-container">
        {students.map((student, index) => {
          return (
            <div key={index} className="student">{student.name}</div>
          )
        })}
      </div>
    </div>
  )
}

// ==============================
// EXPORT
// ==============================
export default Roster

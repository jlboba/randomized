// ==============================
// DEPENDENCIES
// ==============================
import React from 'react'

// ==============================
// ROSTER COMPONENT
// ==============================
const Roster = ({ students }) => {
  return (
    <div>
      {students.map((student, index) => {
        console.log(student);
        return <div key={index}>{student.name}</div>
      })}
    </div>
  )
}

// ==============================
// EXPORT
// ==============================
export default Roster

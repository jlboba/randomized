// ==============================
// DEPENDENCIES
// ==============================
import React, { Component } from 'react'

// ==============================
// ROSTER COMPONENT
// ==============================
class Roster extends Component {
  // HANDLER METHODS
  // when dragging a student
  onDragStart = (e, student) => {
    e.dataTransfer.setData("name", student.name)
  }

  // RENDER
  render() {
    const { students } = this.props
    return (
      <div className="roster-container">
        <h1>ROSTER</h1>
        <h2>{students.length} STUDENTS</h2>
        <div className="students-container">
          {students.map((student, index) => {
            return (
              <div key={index}>
                {student.inRoster ?
                  <div
                    className="student"
                    onDragStart={(e) => this.onDragStart(e, student)}
                    draggable
                  >
                    {student.name}
                  </div>
                : null}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

// ==============================
// EXPORT
// ==============================
export default Roster

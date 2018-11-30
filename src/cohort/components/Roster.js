// ==============================
// DEPENDENCIES
// ==============================
import React, { Component } from 'react'

// ==============================
// ROSTER COMPONENT
// ==============================
class Roster extends Component {
  // DRAG METHODS
  // when dragging a student
  onDragStart = (e, student) => {
    e.dataTransfer.setData("name", student.name)
  }

  onDragOver = (e) => {
    e.preventDefault()
  }

  onDrop = (e) => {
    let studentName = e.dataTransfer.getData("name")
    this.props.handleStudentState(studentName, "roster")
  }

  onClick = (student) => {
    if(student.inRandomizer) {
      this.props.handleStudentStateIncluded(student)
    }
  }

  // RENDER
  render() {
    const { students } = this.props
    return (
      <div className="roster-container">
        <h1>ROSTER</h1>
        <h2>{students.length} STUDENTS</h2>
        <div
          className="students-container"
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => this.onDrop(e)}
        >
          {students.map((student, index) => {
            return (
              <div key={index}>
                {student.inRoster ?
                  student.included ? <div
                    className="student"
                    onDragStart={(e) => this.onDragStart(e, student)}
                    onClick={() => this.onClick(student)}
                    draggable
                  >
                    {student.name}
                  </div> : <div
                    className="student"
                    onClick={() => this.onClick(student)}
                  >
                    <s>{student.name}</s>
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

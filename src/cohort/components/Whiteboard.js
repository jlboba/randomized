// ==============================
// DEPENDENCIES
// ==============================
import React, { Component } from 'react'

// ==============================
// ADD STUDENT COMPONENT
// ==============================
class Whiteboard extends Component {

  // DRAG METHODS
  onDragOver = (e) => {
    e.preventDefault()
  }

  onDrop = (e) => {
    let studentName = e.dataTransfer.getData("name")
    this.props.handleStudentState(studentName, "whiteboard")
  }

  onDragStart = (e, student) => {
    e.dataTransfer.setData("name", student.name)
  }

  // LIFE CYCLES
  componentDidMount() {
    this.props.getCohort()
  }


  // RENDER
  render() {
    const { students } = this.props

    return (
      <div
        className="whiteboard-container"
        onDragOver={(e) => this.onDragOver(e)}
        onDrop={(e) => this.onDrop(e)}
      >
        {students.map((student, id) => {
          return (
            <div key={id}>
              {student.category === 'whiteboard' ?
              <div
                className="student"
                onDragStart={(e) => this.onDragStart(e, student)}
                draggable
              >
                {student.name}
              </div> : null}
            </div>
          )
        })}
      </div>
    )
  }
}

// ==============================
// EXPORT
// ==============================
export default Whiteboard

// ==============================
// DEPENDENCIES
// ==============================
import React, { Component } from 'react'

// ==============================
// ADD STUDENT COMPONENT
// ==============================
class Whiteboard extends Component {
  // STATE
  state = {
    students: []
  }

  // DRAG METHODS
  onDragOver = (e) => {
    e.preventDefault()
  }

  onDrop = (e) => {
    let studentName = e.dataTransfer.getData("name")
    this.props.handleStudentState(studentName, "whiteboard")
    this.setState(prevState => {
      return {
        students: [
          ...prevState.students,
          studentName
        ]
      }
    })
  }

  // LIFE CYCLES
  componentDidMount() {
    this.props.getCohort()
  }


  // RENDER
  render() {
    return (
      <div
        className="whiteboard-container"
        onDragOver={(e) => this.onDragOver(e)}
        onDrop={(e) => this.onDrop(e)}
      >
        {this.state.students.map((student, id) => {
          return (
            <div key={id} className="student">
              {student}
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

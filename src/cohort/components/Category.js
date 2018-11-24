// ==============================
// DEPENDENCIES
// ==============================
import React, { Component } from 'react'

// ==============================
// CATEGORY COMPONENT
// ==============================
class Category extends Component {
  // DRAG METHODS
  onDragOver = (e) => {
    e.preventDefault()
  }

  onDrop = (e, categoryName) => {
    let studentName = e.dataTransfer.getData("name")
    this.props.handleStudentState(studentName, categoryName)
  }

  onDragStart = (e, student) => {
    e.dataTransfer.setData("name", student.name)
  }

  // RENDER
  render() {
    const { name, students } = this.props
    return (
      <div
        className={name + ' category'}
        onDragOver={(e) => this.onDragOver(e)}
        onDrop={(e) => this.onDrop(e, name)}
      >
        {students.map((student, id) => {
          return (
            <div key={id}>
              {student.category === name ?
                <div
                  className="student"
                  onDragStart={(e) => this.onDragStart(e, student)}
                  draggable
                >
                  {student.name}
                </div>
                : null
              }
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
export default Category

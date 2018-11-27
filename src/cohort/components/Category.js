// ==============================
// DEPENDENCIES
// ==============================
import React, { Component } from 'react'

// ==============================
// CATEGORY COMPONENT
// ==============================
class Category extends Component {
  // STATE
  state = {
    editable: true
  }
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

  // LIFE CYCLES
  componentDidMount() {
    if(!this.props.editable) {
      this.setState(prevState => {
        return {
          editable: false
        }
      })
    }
  }

  // RENDER
  render() {
    const { name, students } = this.props
    return (
      <div>
      {this.state.editable ?
        <div
          className={name + ' category'}
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => this.onDrop(e, name)}
        >
          <h1>{name}</h1>
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
        </div> :
        <div className={name + ' category'}>
          <h1>{name}</h1>
          {students.map((student, id) => {
            return (
              <div key={id}>
                {student.category === name ?
                  <div className="student">
                    {student.name}
                  </div>
                  : null
                }
              </div>
            )
          })}
        </div>
      }
      </div>
    )
  }
}

// ==============================
// EXPORT
// ==============================
export default Category

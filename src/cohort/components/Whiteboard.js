// ==============================
// DEPENDENCIES
// ==============================
import React, { Component } from 'react'

// ==============================
// IMPORTED COMPONENTS
// ==============================
import Category from './Category'

// ==============================
// WHITEBOARD COMPONENT
// ==============================
class Whiteboard extends Component {
  // STATE
  state = {
    categories: []
  }

  // HELPER METHODS
  createCategory = (categoryName) => {
    this.setState(prevState => {
      return {
        categories: [
          ...prevState.categories,
          categoryName
        ]
      }
    })
  }

  // DRAG METHODS
  onDragStart = (e, student) => {
    e.dataTransfer.setData("name", student.name)
  }

  // LIFE CYCLES
  componentDidMount() {
    this.props.getCohort()
  }

  // RENDER
  render() {
    const { students, handleStudentState } = this.props

    return (
      <div className="whiteboard-container">
        <button onClick={() => {this.createCategory('test')}}>hi</button>
        {this.state.categories.map((category, id) => {
          return (
            <Category
              key={id}
              name={category}
              students={students}
              handleStudentState={handleStudentState}
            />
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

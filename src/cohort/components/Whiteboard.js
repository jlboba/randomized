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
  createCategory = (e) => {
    e.preventDefault()
    this.setState(prevState => {
      return {
        categories: [
          ...prevState.categories,
          this.refs.categoryName.value
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
        {/* ======== FORM TO ADD CATEGORY ======== */}
        <form onSubmit={this.createCategory}>
          <input type="text" ref="categoryName" placeholder="name"/>
          <input type="submit"/>
        </form>
        {/* ======== CATEGORIES ======== */}
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

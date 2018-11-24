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
  // TODO: ADD ERROR CHECKING FOR CREATECATEGORY
    // if a cat name already exists
    // if a cat name is not entered
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
          <input type="submit" value="add category"/>
        </form>
        {/* ======== CATEGORIES ======== */}
        <div className="categories-container">
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
      </div>
    )
  }
}

// ==============================
// EXPORT
// ==============================
export default Whiteboard

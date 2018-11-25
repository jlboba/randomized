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
  checkIfCatEmpty = (categoryName) => {
    if (categoryName === '') {
      return 'undefined-' + this.state.categories.length
    }
    return categoryName
  }

  checkIfRepeatedCat = (categoryName) => {
    let numberOfTimes = 0
    this.state.categories.forEach((category) => {
      let splitCategory = category.split('-')
      if (splitCategory[0] === categoryName) {
        numberOfTimes++
      }
    })
    if (numberOfTimes > 0) {
      numberOfTimes++
      return categoryName = categoryName + '-' + numberOfTimes
    }
    return categoryName
  }

  updateCategoryState = (categoryName) => {
    this.setState(prevState => {
      return {
        categories: [
          ...prevState.categories,
          categoryName
        ]
      }
    })
  }

  handleCategorySubmit = (e) => {
    // prevent default form
    e.preventDefault()
    // save entered value to categoryName
    let categoryName = this.refs.categoryName.value
    // clear form ref
    this.refs.categoryName.value = null
    // check if user entered a category name
    categoryName = this.checkIfCatEmpty(categoryName)
    // check if user entered existing category name
    categoryName = this.checkIfRepeatedCat(categoryName)
    // finally, update the state with the new category
    this.updateCategoryState(categoryName)
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
        <form onSubmit={this.handleCategorySubmit}>
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

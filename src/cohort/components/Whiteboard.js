// ==============================
// DEPENDENCIES
// ==============================
import React, { Component } from 'react'
import axios from 'axios'

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
    showCreateList: false,
    toggleButton: true,
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

  toggleCreateList = () => {
    this.setState(prevState => {
      return {
        showCreateList: !prevState.showCreateList
      }
    })
  }

  wipeBoard = () => {
    // reset all student state
    this.props.students.forEach((student) => {
      this.props.handleStudentState(student.name, 'roster')
    })
    // reset whiteboard
    this.setState(prevState => {
      return {
        showCreateList: false,
        toggleButton: true,
        categories: []
      }
    })

  }

  // SUBMIT METHODS
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

  handleListSubmit = (e) => {
    // prevent default form
    e.preventDefault()
    // default student array
    let students = []
    // get rid of students with no category
    this.props.students.forEach((student) => {
      if(student.category !== null) {
        students.push(student)
      }
    })
    // create the list
    axios.post('https://randomized-api.herokuapp.com/lists', {
      name: this.refs.listName.value,
      cohort_id: this.props.cohortId,
      students: students
    })
      .then((savedList) => {
        this.refs.listName.value = null
        this.setState(prevState => {
          return {
            showCreateList: false,
            toggleButton: false
          }
        })
      })
      .catch(err => console.log(err))
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
          <input type="text" ref="categoryName" placeholder="name your category"/>
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
        {/* ======== BUTTON TO TOGGLE SAVING AS A LIST ======== */}
        {this.state.toggleButton ?
          <button onClick={this.toggleCreateList}>SAVE AS LIST?</button> :
          <button onClick={this.wipeBoard}>LIST SAVED! WIPE BOARD?</button>
        }
        {/* ======== FORM TO SAVE AS LIST ======== */}
        {this.state.showCreateList ?
          <form onSubmit={this.handleListSubmit}>
            <input type="text" ref="listName" placeholder="name your list"/>
            <input type="submit" value="create list"/>
          </form> : null
        }
      </div>
    )
  }
}

// ==============================
// EXPORT
// ==============================
export default Whiteboard
